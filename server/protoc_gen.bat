protoc -I datagrinder/ datagrinder/datagrinder.proto --go_out=plugins=grpc:datagrinder
start protoc-gen-grpc --js_out=import_style=commonjs,binary:../src/app/datagrinder_pb --grpc_out=../src/app/datagrinder_pb --proto_path ./datagrinder ./datagrinder/datagrinder.proto
start protoc-gen-grpc-ts --ts_out=service=true:../src/app/datagrinder_pb --proto_path ./datagrinder ./datagrinder/datagrinder.proto