package main

import (
	"fmt"
	"github.com/troyspencer/datagrinder.app/api"
	"github.com/troyspencer/datagrinder.app/protobuf/datagrinder"
	"log"
	"net/http"
	"os"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/k2wanko/gaegrpc"
)

func init() {
	// Create new gaegrpc server
	grpcServer := gaegrpc.NewServer()

	// Bind gRPC server implementations
	datagrinder.RegisterGrinderServer(grpcServer, &api.GrinderServer{})

	// Wrap server with grpcweb
	wrappedGrpcServer := grpcweb.WrapServer(grpcServer)
	appHandler := createAppHandler(wrappedGrpcServer)

	// Set the default http handler function to use our custom handler
	http.HandleFunc("/api/", appHandler)
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Printf("Defaulting to port %s", port)
	}

	log.Printf("Listening on port %s", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), nil))
}

func createAppHandler(wrappedGrpcServer *grpcweb.WrappedGrpcServer) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if wrappedGrpcServer.IsGrpcWebRequest(r) {
			http.StripPrefix("/api", gaegrpc.NewWrapHandler(wrappedGrpcServer)).ServeHTTP(w, r)
		}
	}
}
