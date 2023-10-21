package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/graph"
	"student-laboratory-matching-app/graph/service"
	"student-laboratory-matching-app/middleware/auth"

	"github.com/99designs/gqlgen/graphql"
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
		AllowedOrigins: []string{"https://student-laboratory-matching-app.vercel.app", os.Getenv("FE_URL")},
		AllowedHeaders: []string{"*"},
		AllowedMethods: []string{
			http.MethodHead,
			http.MethodGet,
			http.MethodPost,
			http.MethodPut,
			http.MethodPatch,
			http.MethodDelete,
			http.MethodOptions,
		},
		AllowCredentials: true,
		Debug:            os.Getenv("GO_ENV") == "dev",
	}))

	server := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{
		Srv: service,
	}}))
	server.AroundOperations(func(ctx context.Context, next graphql.OperationHandler) graphql.ResponseHandler {
		// ref. https://github.com/99designs/gqlgen/issues/1357#issuecomment-829007489
		oc := graphql.GetOperationContext(ctx)
		log.Printf("GraphQL: %s", oc.RawQuery)
		return next(ctx)
	})

	router.Handle("/", playground.Handler("GraphQL playground", "/query"))
	router.Handle("/query", auth.UserIdMiddleware(server))

	log.Printf("🚀 Server started; connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
