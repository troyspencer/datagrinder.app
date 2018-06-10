package main

import (
	"gcloud/grpc_playground/server"

	"google.golang.org/appengine"
)

func main() {
	server.Run()

	appengine.Main()
}
