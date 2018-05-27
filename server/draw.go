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
	"strconv"
)

type drawGrind struct {
	setting int
	width   int
	height  int
}

// DrawFromInput receives a setting, width, and height, and writes a
// base64 encoded image in response
func DrawFromInput(w http.ResponseWriter, r *http.Request) {

	switch r.Method {
	case "GET":
		// Serve the resource.
	case "POST":
		decoder := json.NewDecoder(r.Body)
		var dg drawGrind
		err := decoder.Decode(&dg)
		if err != nil {
			panic(err)
		}
		defer r.Body.Close()

		m := image.NewRGBA(image.Rect(0, 0, dg.width, dg.height))

		blue := color.RGBA{0, 0, uint8(255 * dg.setting / 5), uint8(255 * dg.setting / 5)}
		draw.Draw(m, m.Bounds(), &image.Uniform{blue}, image.ZP, draw.Src)
		var img image.Image = m
		base64Image(w, &img)
	case "PUT":
		// Update an existing record.
	case "DELETE":
		// Remove the record.
	default:
		// Give an error message.
	}

}

// Base64ImageResponse defines the response
type Base64ImageResponse struct {
	Base64url string `json:"base64url"`
}

func base64Image(w http.ResponseWriter, img *image.Image) {
	// create a new buffer base on file size

	buffer := new(bytes.Buffer)
	if err := jpeg.Encode(buffer, *img, nil); err != nil {
		log.Println("unable to encode image.")
	}

	/* fInfo, _ := buffer.Stat()
	var size int64 = fInfo.Size()
	buf := make([]byte, size)

	// read file content into buffer
	fReader := bufio.NewReader(img)
	fReader.Read(buf) */

	// if you create a new image instead of loading from file, encode the image to buffer instead with png.Encode()

	// png.Encode(&buf, image)

	// convert the buffer bytes to base64 string - use buf.Bytes() for new image
	imgBase64Str := base64.StdEncoding.EncodeToString(buffer.Bytes())

	// Embed into an html without PNG file
	//img2html := "<html><body><img src=\"data:image/png;base64," + imgBase64Str + "\" /></body></html>"

	img2html := imgBase64Str

	drawing := Base64ImageResponse{Base64url: img2html}

	//drawing := map[string]string{"base64url": img2html}

	log.Println(drawing)
	//fmt.Fprintf(w, drawing)
	json.NewEncoder(w).Encode(drawing)

	//w.Write([]byte(fmt.Sprintf(img2html)))
}

func writeImage(w http.ResponseWriter, img *image.Image) {

	buffer := new(bytes.Buffer)
	if err := jpeg.Encode(buffer, *img, nil); err != nil {
		log.Println("unable to encode image.")
	}

	w.Header().Set("Content-Type", "image/jpeg")
	w.Header().Set("Content-Length", strconv.Itoa(len(buffer.Bytes())))
	if _, err := w.Write(buffer.Bytes()); err != nil {
		log.Println("unable to write image.")
	}
}
