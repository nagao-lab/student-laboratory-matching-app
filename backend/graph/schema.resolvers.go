package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.37

import (
	"context"
	"student-laboratory-matching-app/graph/model"
)

// University is the resolver for the university field.
func (r *laboratoryResolver) University(ctx context.Context, obj *model.Laboratory) (*model.University, error) {
	return r.Srv.GetUniversityById(obj.University.ID)
}

// Majors is the resolver for the majors field.
func (r *laboratoryResolver) Majors(ctx context.Context, obj *model.Laboratory) ([]*model.Major, error) {
	return r.Srv.GetMajorByLaboratory(obj.ID)
}

// SignupStudent is the resolver for the signupStudent field.
func (r *mutationResolver) SignupStudent(ctx context.Context, input model.NewStudent) (*model.Student, error) {
	return r.Srv.Signup(input)
}

// LoginStudent is the resolver for the loginStudent field.
func (r *mutationResolver) LoginStudent(ctx context.Context, email string, password string) (*model.Student, error) {
	return r.Srv.Login(email, password)
}

// ThumbsupToLaboratory is the resolver for the thumbsupToLaboratory field.
func (r *mutationResolver) ThumbsupToLaboratory(ctx context.Context, id string) (*model.StudentLaboratory, error) {
	return r.Srv.ThumbsupToLaboratory(id)
}

// ThumbsdownToLaboratory is the resolver for the thumbsdownToLaboratory field.
func (r *mutationResolver) ThumbsdownToLaboratory(ctx context.Context, id string) (*model.StudentLaboratory, error) {
	return r.Srv.ThumbsdownToLaboratory(id)
}

// UpdateStudent is the resolver for the updateStudent field.
func (r *mutationResolver) UpdateStudent(ctx context.Context, input model.NewStudentFields) (*model.Student, error) {
	return r.Srv.UpdateStudent(input)
}

// CreateMajor is the resolver for the createMajor field.
func (r *mutationResolver) CreateMajor(ctx context.Context, name string) (*model.Major, error) {
	return r.Srv.CreateMajor(name)
}

// CreateUniversity is the resolver for the createUniversity field.
func (r *mutationResolver) CreateUniversity(ctx context.Context, input model.NewUniversity) (*model.University, error) {
	return r.Srv.CreateUniversity(input)
}

// Student is the resolver for the student field.
func (r *queryResolver) Student(ctx context.Context, id string) (*model.Student, error) {
	return r.Srv.GetStudentById(id)
}

// GetMatchableStudents is the resolver for the getMatchableStudents field.
func (r *queryResolver) GetMatchableStudents(ctx context.Context, id string) ([]*model.Student, error) {
	return r.Srv.GetMatchableStudents(id)
}

// Laboratory is the resolver for the laboratory field.
func (r *queryResolver) Laboratory(ctx context.Context, id string) (*model.Laboratory, error) {
	return r.Srv.GetLaboratoryById(id)
}

// GetMatchableLaboratories is the resolver for the getMatchableLaboratories field.
func (r *queryResolver) GetMatchableLaboratories(ctx context.Context, id string) ([]*model.Laboratory, error) {
	return r.Srv.GetMatchableLaboratories(id)
}

// University is the resolver for the university field.
func (r *studentResolver) University(ctx context.Context, obj *model.Student) (*model.University, error) {
	return r.Srv.GetUniversityById(obj.University.ID)
}

// Prefecture is the resolver for the prefecture field.
func (r *studentResolver) Prefecture(ctx context.Context, obj *model.Student) (*model.Prefecture, error) {
	return r.Srv.GetPrefectureById(obj.Prefecture.ID)
}

// Majors is the resolver for the majors field.
func (r *studentResolver) Majors(ctx context.Context, obj *model.Student) ([]*model.Major, error) {
	return r.Srv.GetMajorByStudent(obj.ID)
}

// Prefecture is the resolver for the prefecture field.
func (r *universityResolver) Prefecture(ctx context.Context, obj *model.University) (*model.Prefecture, error) {
	return r.Srv.GetPrefectureById(obj.Prefecture.ID)
}

// Laboratory returns LaboratoryResolver implementation.
func (r *Resolver) Laboratory() LaboratoryResolver { return &laboratoryResolver{r} }

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

// Student returns StudentResolver implementation.
func (r *Resolver) Student() StudentResolver { return &studentResolver{r} }

// University returns UniversityResolver implementation.
func (r *Resolver) University() UniversityResolver { return &universityResolver{r} }

type laboratoryResolver struct{ *Resolver }
type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type studentResolver struct{ *Resolver }
type universityResolver struct{ *Resolver }
