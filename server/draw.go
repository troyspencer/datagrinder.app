package server

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
	pb "troy/gcloud/grpc_playground/server/datagrinder"
)

// DrawFromInput receives a setting, width, and height, and writes a
// base64 encoded image in response
func DrawFromInput(w http.ResponseWriter, r *http.Request) {

	switch r.Method {
	case "GET":
		// Serve the resource.
	case "POST":

		/* var dg DrawGrind

		decoder := json.NewDecoder(r.Body)
		err := decoder.Decode(&dg)

		log.Println(dg)
		if err != nil {
			panic(err)
		}
		defer r.Body.Close()
		drawing := Draw(dg)
		base64Image(w, &drawing) */

	case "PUT":
		// Update an existing record.
	case "DELETE":
		// Remove the record.
	default:
		// Give an error message.
	}

}

// Draw takes a drawGrind object and converts it into an image.Image
func Draw(g pb.GrinderInput) image.Image {
	m := image.NewRGBA(image.Rect(0, 0, int(g.Width), int(g.Height)))

	blue := color.RGBA{uint8(255 * int(g.Setting) / 5), uint8(255 * int(g.Setting) / 5), uint8(255 * int(g.Setting) / 5), 255}
	draw.Draw(m, m.Bounds(), &image.Uniform{blue}, image.ZP, draw.Src)
	return image.Image(m)
}

// Base64ImageResponse defines the response
type Base64ImageResponse struct {
	Base64url string `json:"base64url"`
}

func convertImageToBase64(img *image.Image) string {
	buffer := new(bytes.Buffer)
	if err := jpeg.Encode(buffer, *img, nil); err != nil {
		log.Println("unable to encode image.")
	}

	imgBase64Str := base64.StdEncoding.EncodeToString(buffer.Bytes())

	img2html := "data:image/jpeg;base64," + imgBase64Str
	return img2html
}

func base64Image(w http.ResponseWriter, img *image.Image) {
	drawing := Base64ImageResponse{Base64url: convertImageToBase64(img)}
	json.NewEncoder(w).Encode(drawing)
}
