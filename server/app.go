package main

import (
	"fmt"
	"net/http"
	"os"

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

func main() {
	// Read configuration environment variables
	clientID = os.Getenv("CLIENT_ID")
	// Register routes
	http.HandleFunc("/greet", greet)
	http.HandleFunc("/draw", drawFromInput)
	http.HandleFunc("/", indexHandler)

	// Start HTTP server
	appengine.Main()
}
