package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.38

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
	return r.Srv.SignupStudent(ctx, input)
}

// SignupLaboratory is the resolver for the signupLaboratory field.
func (r *mutationResolver) SignupLaboratory(ctx context.Context, input model.NewLaboratory) (*model.Laboratory, error) {
	return r.Srv.SignupLaboratory(ctx, input)
}

// LoginStudent is the resolver for the loginStudent field.
func (r *mutationResolver) LoginStudent(ctx context.Context, email string, password string) (*model.Student, error) {
	return r.Srv.LoginStudent(ctx, email, password)
}

// LoginLaboratory is the resolver for the loginLaboratory field.
func (r *mutationResolver) LoginLaboratory(ctx context.Context, email string, password string) (*model.Laboratory, error) {
	return r.Srv.LoginLaboratory(ctx, email, password)
}

// LogoutStudent is the resolver for the logoutStudent field.
func (r *mutationResolver) LogoutStudent(ctx context.Context) (bool, error) {
	return r.Srv.LogoutStudent(ctx)
}

// LogoutLaboratory is the resolver for the logoutLaboratory field.
func (r *mutationResolver) LogoutLaboratory(ctx context.Context) (bool, error) {
	return r.Srv.LogoutLaboratory(ctx)
}

// DeleteStudent is the resolver for the deleteStudent field.
func (r *mutationResolver) DeleteStudent(ctx context.Context, id string) (bool, error) {
	return r.Srv.DeleteStudent(id)
}

// FavoriteLaboratory is the resolver for the favoriteLaboratory field.
func (r *mutationResolver) FavoriteLaboratory(ctx context.Context, input model.NewLike) (model.LikeStatus, error) {
	return r.Srv.FavoriteLaboratory(input)
}

// FavoriteStudent is the resolver for the favoriteStudent field.
func (r *mutationResolver) FavoriteStudent(ctx context.Context, input model.NewLike) (model.LikeStatus, error) {
	return r.Srv.FavoriteStudent(input)
}

// UnfavoriteLaboratory is the resolver for the unfavoriteLaboratory field.
func (r *mutationResolver) UnfavoriteLaboratory(ctx context.Context, input model.NewLike) (model.LikeStatus, error) {
	return r.Srv.UnfavoriteLaboratory(input)
}

// UnfavoriteStudent is the resolver for the unfavoriteStudent field.
func (r *mutationResolver) UnfavoriteStudent(ctx context.Context, input model.NewLike) (model.LikeStatus, error) {
	return r.Srv.UnfavoriteStudent(input)
}

// UpdateStudent is the resolver for the updateStudent field.
func (r *mutationResolver) UpdateStudent(ctx context.Context, input model.NewStudentFields) (*model.Student, error) {
	return r.Srv.UpdateStudent(input)
}

// UpdateLaboratory is the resolver for the updateLaboratory field.
func (r *mutationResolver) UpdateLaboratory(ctx context.Context, input model.NewLaboratoryFields) (*model.Laboratory, error) {
	return r.Srv.UpdateLaboratory(input)
}

// CreateMajor is the resolver for the createMajor field.
func (r *mutationResolver) CreateMajor(ctx context.Context, name string) (*model.Major, error) {
	return r.Srv.CreateMajor(name)
}

// CreateUniversity is the resolver for the createUniversity field.
func (r *mutationResolver) CreateUniversity(ctx context.Context, input model.NewUniversity) (*model.University, error) {
	return r.Srv.CreateUniversity(input)
}

// CreateMessage is the resolver for the createMessage field.
func (r *mutationResolver) CreateMessage(ctx context.Context, input model.NewMessage) (*model.Message, error) {
	return r.Srv.CreateMessage(input)
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

// GetAllMajors is the resolver for the getAllMajors field.
func (r *queryResolver) GetAllMajors(ctx context.Context) ([]*model.Major, error) {
	return r.Srv.GetAllMajors()
}

// GetAllPrefectures is the resolver for the getAllPrefectures field.
func (r *queryResolver) GetAllPrefectures(ctx context.Context) ([]*model.Prefecture, error) {
	return r.Srv.GetAllPrefectures()
}

// GetAllUniversities is the resolver for the getAllUniversities field.
func (r *queryResolver) GetAllUniversities(ctx context.Context) ([]*model.University, error) {
	return r.Srv.GetAllUniversities()
}

// GetLikeStatus is the resolver for the getLikeStatus field.
func (r *queryResolver) GetLikeStatus(ctx context.Context, input model.NewLike) (model.LikeStatus, error) {
	return r.Srv.GetLikeStatusByIds(input)
}

// GetStudentLaboratoriesByID is the resolver for the getStudentLaboratoriesById field.
func (r *queryResolver) GetStudentLaboratoriesByID(ctx context.Context, id string) (*model.StudentLaboratory, error) {
	return r.Srv.GetStudentLaboratoriesById(id)
}

// GetStudentLaboratoriesByStudentID is the resolver for the getStudentLaboratoriesByStudentId field.
func (r *queryResolver) GetStudentLaboratoriesByStudentID(ctx context.Context, id *string, filter *model.LikeStatus) ([]*model.StudentLaboratory, error) {
	return r.Srv.GetStudentLaboratoriesByStudentId(ctx, id, filter)
}

// GetStudentLaboratoriesByLaboratoryID is the resolver for the getStudentLaboratoriesByLaboratoryId field.
func (r *queryResolver) GetStudentLaboratoriesByLaboratoryID(ctx context.Context, id *string, filter *model.LikeStatus) ([]*model.StudentLaboratory, error) {
	return r.Srv.GetStudentLaboratoriesByLaboratoryId(ctx, id, filter)
}

// GetMessages is the resolver for the getMessages field.
func (r *queryResolver) GetMessages(ctx context.Context, messageRoomID string) ([]*model.Message, error) {
	return r.Srv.GetMessages(messageRoomID)
}

// GetMessagesByIds is the resolver for the getMessagesByIds field.
func (r *queryResolver) GetMessagesByIds(ctx context.Context, input model.NewLike) ([]*model.Message, error) {
	return r.Srv.GetMessagesByIds(input)
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

// Student is the resolver for the student field.
func (r *studentLaboratoryResolver) Student(ctx context.Context, obj *model.StudentLaboratory) (*model.Student, error) {
	return r.Srv.GetStudentById(obj.Student.ID)
}

// Laboratory is the resolver for the laboratory field.
func (r *studentLaboratoryResolver) Laboratory(ctx context.Context, obj *model.StudentLaboratory) (*model.Laboratory, error) {
	return r.Srv.GetLaboratoryById(obj.Laboratory.ID)
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

// StudentLaboratory returns StudentLaboratoryResolver implementation.
func (r *Resolver) StudentLaboratory() StudentLaboratoryResolver {
	return &studentLaboratoryResolver{r}
}

// University returns UniversityResolver implementation.
func (r *Resolver) University() UniversityResolver { return &universityResolver{r} }

type laboratoryResolver struct{ *Resolver }
type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type studentResolver struct{ *Resolver }
type studentLaboratoryResolver struct{ *Resolver }
type universityResolver struct{ *Resolver }
