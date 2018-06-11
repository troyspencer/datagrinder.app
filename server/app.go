package server

import (
	"gcloud/grpc_playground/server/api"
	"gcloud/grpc_playground/server/datagrinder"
	"net/http"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/k2wanko/gaegrpc"
)

// Run is where the App attaches to from serve.go
func Run() {
	// Create new gaegrpc server
	grpcServer := gaegrpc.NewServer()

	// Bind gRPC server implementations
	datagrinder.RegisterGrinderServer(grpcServer, &api.GrinderServer{})

	// Wrap server with grpcweb
	wrappedGrpcServer := grpcweb.WrapServer(grpcServer)

	// Choose between grpc and other options
	appHandler := createAppHandler(wrappedGrpcServer)

	// Set the default http handler function to use our custom handler
	http.HandleFunc("/", appHandler)

	// The GAE serve.go will call this to set up things,
	// then run the http server using the configuration made here
}

func createAppHandler(wrappedGrpcServer *grpcweb.WrappedGrpcServer) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if wrappedGrpcServer.IsGrpcWebRequest(r) {
			gaegrpc.NewWrapHandler(wrappedGrpcServer).ServeHTTP(w, r)
		} else {
			indexHandler(w, r)
		}
	}
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	// if statement redirects all invalid URLs to the root homepage.
	// Ex: if URL is http://[YOUR_PROJECT_ID].appspot.com/FOO, it will be
	// redirected to http://[YOUR_PROJECT_ID].appspot.com.
	if r.URL.Path != "/" {
		http.Redirect(w, r, "/", http.StatusFound)
		return
	}
}
