package draw

import (
	"bytes"
	"encoding/base64"
	"image"
	"image/color"
	"image/draw"
	"image/jpeg"
	"log"
)

type drawImage struct {
}

// Draw takes a width, height, and shade setting and converts it into a base64 image string
func Draw(width int32, height int32, setting int32) (base64Image string) {

	color := imageColor(int(setting))

	boundsWidth, boundsHeight := imageBounds(int(width), int(height))
	shape := image.NewRGBA(image.Rect(0, 0, boundsWidth, boundsHeight))

	draw.Draw(shape, shape.Bounds(), &image.Uniform{color}, image.ZP, draw.Src)

	imageString := convertImageToBase64(shape)

	return imageString
}

func imageColor(setting int) color.RGBA {
	shade := imageShade(setting)
	var alpha uint8 = 255
	// return a gray with the specified shade
	return color.RGBA{shade, shade, shade, alpha}
}

func imageShade(setting int) (shade uint8) {
	// bounds enforcing
	minSetting := 1
	maxSetting := 5
	maxShade := 255
	setting = cap(setting, minSetting, maxSetting)

	// create a shade from setting 0 = black to setting 4 = white
	return uint8(maxShade * (int(setting) - 1) / (maxSetting - 1))
}

func imageBounds(width int, height int) (boundsWidth int, boundsHeight int) {
	minSize := 0
	maxSize := 1000

	// cap width and height to min and max size
	width = cap(width, minSize, maxSize)
	height = cap(height, minSize, maxSize)

	boundsWidth, boundsHeight = scale(width, height, maxSize)

	return boundsWidth, boundsHeight
}

func scale(x int, y int, max int) (scaledX int, scaledY int) {
	if x <= 0 || y <= 0 {
		return 0, 0
	}

	if x >= y {
		scaledX = max
		scaledY = int(float32(max) * float32(y) / float32(x))
	} else {
		scaledX = int(float32(max) * float32(x) / float32(y))
		scaledY = max
	}
	return scaledX, scaledY
}

func cap(value int, min int, max int) (cappedValue int) {
	if value > max {
		value = max
	} else if value < min {
		value = min
	}
	return value
}

func convertImageToBase64(img image.Image) string {
	buffer := new(bytes.Buffer)
	if err := jpeg.Encode(buffer, img, nil); err != nil {
		log.Println("unable to encode image.")
	}

	imgBase64Str := base64.StdEncoding.EncodeToString(buffer.Bytes())

	img2html := "data:image/jpeg;base64," + imgBase64Str
	return img2html
}
