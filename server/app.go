package server

import (
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"troy/gcloud/grpc_playground/server/datagrinder"

	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	"google.golang.org/appengine"
)

var (
	clientID string
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

func Run() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Println(err)
	}
	// Read configuration environment variables
	clientID = os.Getenv("CLIENT_ID")
	// Register routes
	http.HandleFunc("/greet", greet)
	http.HandleFunc("/draw", DrawFromInput)
	http.HandleFunc("/", indexHandler)

	s := grpc.NewServer()
	datagrinder.RegisterGrinderServer(s, &server{})
	// Register reflection service on gRPC server.
	reflection.Register(s)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}

	// Start HTTP server
	appengine.Main()
}

func NewRun() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Println(err)
	}

	s := grpc.NewServer()
	datagrinder.RegisterGrinderServer(s, &server{})
	// Register reflection service on gRPC server.
	//reflection.Register(s)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}

	// Start HTTP server

}

const (
	port = ":50050"
)

type server struct{}

// SayHello implements helloworld.GreeterServer
func (s *server) Grind(ctx context.Context, in *datagrinder.GrinderInput) (*datagrinder.GrinderOutput, error) {
	drawing := Draw(*in)
	base64 := convertImageToBase64(&drawing)
	return &datagrinder.GrinderOutput{Base64Image: base64}, nil
}
