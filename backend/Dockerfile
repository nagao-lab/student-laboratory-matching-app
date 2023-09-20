FROM golang:latest

RUN mkdir /go/src/app
WORKDIR /go/src/app

COPY . .

RUN go build -o server
CMD ["./server"]
