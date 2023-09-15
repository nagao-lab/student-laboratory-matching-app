package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.37

import (
	"backend/graph/model"
	"context"
)

// CreateTodo is the resolver for the createTodo field.
func (r *mutationResolver) CreateTodo(ctx context.Context, input model.NewTodo) (*model.Todo, error) {
	return &model.Todo{
		ID:   input.UserID,
		Text: input.Text,
		User: &model.User{
			ID:   input.UserID,
			Name: "name",
		},
	}, nil
}

// Todos is the resolver for the todos field.
func (r *queryResolver) Todos(ctx context.Context) ([]*model.Todo, error) {
	return []*model.Todo{
		{
			ID:   "TODO-1",
			Text: "My Todo 1",
			User: &model.User{
				ID:   "User-1",
				Name: "hsaki",
			},
			Done: true,
		},
		{
			ID:   "TODO-2",
			Text: "My Todo 2",
			User: &model.User{
				ID:   "User-1",
				Name: "hsaki",
			},
			Done: false,
		},
	}, nil
}

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
