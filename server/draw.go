package main

import (
	"bytes"
	"encoding/base64"
	"encoding/json"
	"image"
	"image/color"
	"image/draw"
	"image/jpeg"
	"log"
	"net/http"
)

type DrawGrind struct {
	Setting int `json:"setting"`
	Width   int `json:"width"`
	Height  int `json:"height"`
}

// DrawFromInput receives a setting, width, and height, and writes a
// base64 encoded image in response
func DrawFromInput(w http.ResponseWriter, r *http.Request) {

	switch r.Method {
	case "GET":
		// Serve the resource.
	case "POST":

		var dg DrawGrind

		decoder := json.NewDecoder(r.Body)
		err := decoder.Decode(&dg)

		log.Println(dg)
		if err != nil {
			panic(err)
		}
		defer r.Body.Close()
		drawing := Draw(dg)
		base64Image(w, &drawing)

	case "PUT":
		// Update an existing record.
	case "DELETE":
		// Remove the record.
	default:
		// Give an error message.
	}

}

// Draw takes a drawGrind object and converts it into an image.Image
func Draw(dg DrawGrind) image.Image {
	m := image.NewRGBA(image.Rect(0, 0, dg.Width, dg.Height))

	blue := color.RGBA{uint8(255 * dg.Setting / 5), uint8(255 * dg.Setting / 5), uint8(255 * dg.Setting / 5), 255}
	draw.Draw(m, m.Bounds(), &image.Uniform{blue}, image.ZP, draw.Src)
	return image.Image(m)
}

// Base64ImageResponse defines the response
type Base64ImageResponse struct {
	Base64url string `json:"base64url"`
}

func base64Image(w http.ResponseWriter, img *image.Image) {

	buffer := new(bytes.Buffer)
	if err := jpeg.Encode(buffer, *img, nil); err != nil {
		log.Println("unable to encode image.")
	}

	imgBase64Str := base64.StdEncoding.EncodeToString(buffer.Bytes())

	img2html := "data:image/jpeg;base64," + imgBase64Str

	drawing := Base64ImageResponse{Base64url: img2html}
	json.NewEncoder(w).Encode(drawing)
}
