package main

import (
	"fmt"
	"gcloud/grpc_playground/server"
	"log"
	"net/http"
	"os"
)

func main() {
	server.Run()

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Printf("Defaulting to port %s", port)
	}

	log.Printf("Listening on port %s", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), nil))
}
