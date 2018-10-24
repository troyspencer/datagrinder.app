package draw

import "testing"

func TestImageShade(t *testing.T) {
	tests := []struct {
		setting int
		shade   uint8
	}{
		{1, 0},
		{2, 63},
		{3, 127},
		{4, 191},
		{5, 255},
	}
	for _, test := range tests {
		shade := imageShade(test.setting)
		if shade != test.shade {
			t.Errorf("imageShade(%d): expected %d, actual %d",
				test.setting, test.shade, shade)
		}
	}
}

func TestCap(t *testing.T) {
	tests := []struct {
		value  int
		min    int
		max    int
		result int
	}{
		{-1, 0, 1000, 0},
		{0, 0, 1000, 0},
		{500, 0, 1000, 500},
		{1000, 0, 1000, 1000},
		{1001, 0, 1000, 1000},
	}
	for _, test := range tests {
		result := cap(test.value, test.min, test.max)
		if result != test.result {
			t.Errorf("cap(%d,%d,%d): expected %d, actual %d",
				test.value, test.min, test.max, test.result, result)
		}
	}
}

func TestScale(t *testing.T) {
	tests := []struct {
		x       int
		y       int
		max     int
		scaledX int
		scaledY int
	}{
		{-1, 0, 1000, 0, 0},
		{0, -1, 1000, 0, 0},
		{0, 0, 1000, 0, 0},
		{1000, 0, 1000, 0, 0},
		{1001, 0, 1000, 0, 0},
		{0, 1000, 1000, 0, 0},
		{0, 1001, 1000, 0, 0},
		{1, 2, 1000, 500, 1000},
		{2, 1, 1000, 1000, 500},
		{1, 1000, 1000, 1, 1000},
		{1000, 1, 1000, 1000, 1},
		{500, 500, 1000, 1000, 1000},
		{1000, 500, 1000, 1000, 500},
		{500, 1000, 1000, 500, 1000},
	}
	for _, test := range tests {
		resultX, resultY := scale(test.x, test.y, test.max)

		if resultX != test.scaledX {
			t.Errorf("scale(%d,%d,%d): expected X %d, actual X %d",
				test.x, test.y, test.max, test.scaledX, resultX)
		}
		if resultY != test.scaledY {
			t.Errorf("scale(%d,%d,%d): expected Y %d, actual Y %d",
				test.x, test.y, test.max, test.scaledY, resultY)
		}

	}
}
