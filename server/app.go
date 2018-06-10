package server

import (
	"fmt"
	"gcloud/grpc_playground/server/datagrinder"
	"net/http"
	"strings"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/k2wanko/gaegrpc"
	"golang.org/x/net/context"
)

func indexHandler(w http.ResponseWriter, r *http.Request) {
	// if statement redirects all invalid URLs to the root homepage.
	// Ex: if URL is http://[YOUR_PROJECT_ID].appspot.com/FOO, it will be
	// redirected to http://[YOUR_PROJECT_ID].appspot.com.
	if r.URL.Path != "/" {
		http.Redirect(w, r, "/", http.StatusFound)
		return
	}
}

func greet(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "hello troy")
}

// Run is where the App attaches to from serve.go
func Run() {
	grpcRun()
}

func grpcRun() {
	sv := gaegrpc.NewServer()
	datagrinder.RegisterGrinderServer(sv, &server{})

	wh := gaegrpc.NewWrapHandler(grpcweb.WrapServer(sv))
	http.HandleFunc("/", createAppHandler(wh))
}

func createAppHandler(h http.Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if strings.HasPrefix(r.Header.Get("Content-Type"), "application/grpc-web") {
			h.ServeHTTP(w, r)
		} else {

			indexHandler(w, r)
			//serverTop(w, r)
		}
	}
}

type server struct{}

// Grind implements datagrinder.Grinder
func (s *server) Grind(ctx context.Context, in *datagrinder.GrinderInput) (*datagrinder.GrinderOutput, error) {
	drawing := Draw(*in)
	base64 := convertImageToBase64(&drawing)
	return &datagrinder.GrinderOutput{Base64Image: base64}, nil
}
