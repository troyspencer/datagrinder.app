package draw

import (
	"bytes"
	"encoding/base64"
	"encoding/json"
	pb "gcloud/grpc_playground/server/datagrinder"
	"image"
	"image/color"
	"image/draw"
	"image/jpeg"
	"log"
	"net/http"
)

// Draw takes a drawGrind object and converts it into an image.Image
func Draw(g pb.GrinderInput) image.Image {

	var width, height int
	maxSize := 1000
	if g.Width >= g.Height {
		width = maxSize
		height = int(float32(maxSize) * float32(g.Height) / float32(g.Width))
	} else {
		width = int(float32(maxSize) * float32(g.Width) / float32(g.Height))
		height = maxSize
	}
	m := image.NewRGBA(image.Rect(0, 0, width, height))

	blue := color.RGBA{uint8(255 * (int(g.Setting) - 1) / 4), uint8(255 * (int(g.Setting) - 1) / 4), uint8(255 * (int(g.Setting) - 1) / 4), 255}
	draw.Draw(m, m.Bounds(), &image.Uniform{blue}, image.ZP, draw.Src)
	return image.Image(m)
}

// Base64ImageResponse defines the response
type Base64ImageResponse struct {
	Base64url string `json:"base64url"`
}

func ConvertImageToBase64(img *image.Image) string {
	buffer := new(bytes.Buffer)
	if err := jpeg.Encode(buffer, *img, nil); err != nil {
		log.Println("unable to encode image.")
	}

	imgBase64Str := base64.StdEncoding.EncodeToString(buffer.Bytes())

	img2html := "data:image/jpeg;base64," + imgBase64Str
	return img2html
}

func base64Image(w http.ResponseWriter, img *image.Image) {
	drawing := Base64ImageResponse{Base64url: ConvertImageToBase64(img)}
	json.NewEncoder(w).Encode(drawing)
}
