package main

import (
	"troy/gcloud/grpc_playground/server"

	"google.golang.org/appengine"
)

func main() {
	server.NewRun()

	appengine.Main()
}
