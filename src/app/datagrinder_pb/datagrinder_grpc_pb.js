// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var datagrinder_pb = require('./datagrinder_pb.js');

function serialize_GrinderInput(arg) {
  if (!(arg instanceof datagrinder_pb.GrinderInput)) {
    throw new Error('Expected argument of type GrinderInput');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_GrinderInput(buffer_arg) {
  return datagrinder_pb.GrinderInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GrinderOutput(arg) {
  if (!(arg instanceof datagrinder_pb.GrinderOutput)) {
    throw new Error('Expected argument of type GrinderOutput');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_GrinderOutput(buffer_arg) {
  return datagrinder_pb.GrinderOutput.deserializeBinary(new Uint8Array(buffer_arg));
}


var GrinderService = exports.GrinderService = {
  // Returns a grind result
  grind: {
    path: '/Grinder/Grind',
    requestStream: false,
    responseStream: false,
    requestType: datagrinder_pb.GrinderInput,
    responseType: datagrinder_pb.GrinderOutput,
    requestSerialize: serialize_GrinderInput,
    requestDeserialize: deserialize_GrinderInput,
    responseSerialize: serialize_GrinderOutput,
    responseDeserialize: deserialize_GrinderOutput,
  },
};

exports.GrinderClient = grpc.makeGenericClientConstructor(GrinderService);
