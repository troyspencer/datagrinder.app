package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

var (
	clientID string
)

func greet(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "hello troy")
}

func main() {
	// Read configuration environment variables
	clientID = os.Getenv("CLIENT_ID")
	// Register routes
	r := mux.NewRouter()
	r.HandleFunc("/greet", greet)

	// Start HTTP server
	http.Handle("/", cors.AllowAll().Handler(r))

	http.ListenAndServe("0.0.0.0:8080", r)
}
