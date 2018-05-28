// package: 
// file: datagrinder.proto

import * as grpc from 'grpc';
import * as datagrinder_pb from './datagrinder_pb';

interface IGrinderService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  grind: IGrind
}

interface IGrind {
  path: string; // "/.Grinder/Grind"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: datagrinder_pb.GrinderInput;
  responseType: datagrinder_pb.GrinderOutput;
  requestSerialize: (arg: datagrinder_pb.GrinderInput) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => datagrinder_pb.GrinderInput;
  responseSerialize: (arg: datagrinder_pb.GrinderOutput) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => datagrinder_pb.GrinderOutput;
}

export interface IGrinderClient {
  grind(request: datagrinder_pb.GrinderInput, callback: (error: Error | null, response: datagrinder_pb.GrinderOutput) => void): grpc.ClientUnaryCall;
  grind(request: datagrinder_pb.GrinderInput, metadata: grpc.Metadata, callback: (error: Error | null, response: datagrinder_pb.GrinderOutput) => void): grpc.ClientUnaryCall;
}

export const GrinderService: IGrinderService;
export class GrinderClient extends grpc.Client implements IGrinderClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public grind(request: datagrinder_pb.GrinderInput, callback: (error: Error | null, response: datagrinder_pb.GrinderOutput) => void): grpc.ClientUnaryCall;
  public grind(request: datagrinder_pb.GrinderInput, metadata: grpc.Metadata, callback: (error: Error | null, response: datagrinder_pb.GrinderOutput) => void): grpc.ClientUnaryCall;
}

