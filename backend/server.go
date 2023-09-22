package main

import (
	"log"
	"net/http"
	"os"
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/graph"
	"student-laboratory-matching-app/graph/service"
	"student-laboratory-matching-app/middleware/auth"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/cors"
)

const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	dbConn := db.NewDB()
	defer db.CloseDB(dbConn)

	service := service.NewService(dbConn)

	router := chi.NewRouter()
	router.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"http://localhost:*", os.Getenv("FE_URL")},
		AllowedHeaders:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowCredentials: true,
		Debug:            os.Getenv("GO_ENV") == "dev",
	}))

	server := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{
		Srv: service,
	}}))

	router.Handle("/", playground.Handler("GraphQL playground", "/query"))
	router.Handle("/query", auth.UserIdMiddleware(server))

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
