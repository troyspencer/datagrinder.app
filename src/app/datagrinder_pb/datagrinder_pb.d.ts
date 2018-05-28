// package: 
// file: datagrinder.proto

import * as jspb from 'google-protobuf';

export class GrinderInput extends jspb.Message {
  getSetting(): number;
  setSetting(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getWidth(): number;
  setWidth(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrinderInput.AsObject;
  static toObject(includeInstance: boolean, msg: GrinderInput): GrinderInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrinderInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrinderInput;
  static deserializeBinaryFromReader(message: GrinderInput, reader: jspb.BinaryReader): GrinderInput;
}

export namespace GrinderInput {
  export type AsObject = {
    setting: number,
    height: number,
    width: number,
  }
}

export class GrinderOutput extends jspb.Message {
  getBase64image(): string;
  setBase64image(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrinderOutput.AsObject;
  static toObject(includeInstance: boolean, msg: GrinderOutput): GrinderOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrinderOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrinderOutput;
  static deserializeBinaryFromReader(message: GrinderOutput, reader: jspb.BinaryReader): GrinderOutput;
}

export namespace GrinderOutput {
  export type AsObject = {
    base64image: string,
  }
}

