package api

import (
	"github.com/troyspencer/datagrinder.app/draw"
	"github.com/troyspencer/datagrinder.app/protobuf/datagrinder"

	"golang.org/x/net/context"
)

// GrinderServer binds the protobuf Grinder to the implementation of its methods
type GrinderServer struct{}

// Grind implements datagrinder.Grinder
func (s *GrinderServer) Grind(ctx context.Context, in *datagrinder.GrinderInput) (*datagrinder.GrinderOutput, error) {
	return &datagrinder.GrinderOutput{Base64Image: draw.Draw(in.Width, in.Height, in.Setting)}, nil
}
