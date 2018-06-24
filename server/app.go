package server

import (
	"gcloud/grpc_playground/server/api"
	"gcloud/grpc_playground/server/datagrinder"
	"net/http"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/k2wanko/gaegrpc"
	"google.golang.org/grpc"
)

// Run is where the App attaches to from serve.go
func Run() {
	debug := false

	// Create new gaegrpc server
	grpcServer := gaegrpc.NewServer()

	// Bind gRPC server implementations
	datagrinder.RegisterGrinderServer(grpcServer, &api.GrinderServer{})

	// Wrap server with grpcweb
	wrappedGrpcServer := grpcweb.WrapServer(grpcServer)

	// Choose between grpc and other options
	appHandler := createAppHandler(wrappedGrpcServer, debug)

	// Set the default http handler function to use our custom handler
	http.HandleFunc("/api/", appHandler)

	// The GAE serve.go will call this to set up things,
	// then run the http server using the configuration made here
}

// DebugRun is where the App attaches to from debug.go
func DebugRun() {
	debug := true

	// Create new gaegrpc server
	grpcServer := grpc.NewServer()

	// Bind gRPC server implementations
	datagrinder.RegisterGrinderServer(grpcServer, &api.GrinderServer{})

	// Wrap server with grpcweb
	wrappedGrpcServer := grpcweb.WrapServer(grpcServer)

	// Choose between grpc and other options
	appHandler := createAppHandler(wrappedGrpcServer, debug)

	// Set the default http handler function to use our custom handler
	http.HandleFunc("/api/", appHandler)

	// The GAE serve.go will call this to set up things,
	// then run the http server using the configuration made here
}

func createAppHandler(wrappedGrpcServer *grpcweb.WrappedGrpcServer, debug bool) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if debug {
			http.StripPrefix("/api", wrappedGrpcServer).ServeHTTP(w, r)
		} else if wrappedGrpcServer.IsGrpcWebRequest(r) {
			http.StripPrefix("/api", gaegrpc.NewWrapHandler(wrappedGrpcServer)).ServeHTTP(w, r)
		}
	}
}
