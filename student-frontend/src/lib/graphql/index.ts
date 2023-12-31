import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Time: { input: any; output: any; }
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

export type Laboratory = {
  comment: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageUrl: Scalars['String']['output'];
  laboratoryUrl: Scalars['String']['output'];
  majors: Array<Major>;
  name: Scalars['String']['output'];
  numLikes: Scalars['Int']['output'];
  numStudents: Scalars['Int']['output'];
  password: Scalars['String']['output'];
  professor: Scalars['String']['output'];
  status: MatchStatus;
  uid: Scalars['String']['output'];
  university: University;
};

export enum LikeStatus {
  Blank = 'BLANK',
  LikeFromBoth = 'LIKE_FROM_BOTH',
  LikeFromLaboratory = 'LIKE_FROM_LABORATORY',
  LikeFromStudent = 'LIKE_FROM_STUDENT'
}

export type Major = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export enum MatchStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type Message = {
  content: Scalars['String']['output'];
  createdAt: Scalars['Time']['output'];
  from: UserType;
  messageId: Scalars['ID']['output'];
  messageRoomId: Scalars['ID']['output'];
  updatedAt: Scalars['Time']['output'];
};

export type Mutation = {
  createMajor: Major;
  createMessage?: Maybe<Message>;
  createUniversity: University;
  deleteLaboratory: Scalars['Boolean']['output'];
  deleteStudent: Scalars['Boolean']['output'];
  favoriteLaboratory: LikeStatus;
  favoriteStudent: LikeStatus;
  loginLaboratory: Laboratory;
  loginStudent: Student;
  logoutLaboratory: Scalars['Boolean']['output'];
  logoutStudent: Scalars['Boolean']['output'];
  signupLaboratory: Laboratory;
  signupStudent: Student;
  unfavoriteLaboratory: LikeStatus;
  unfavoriteStudent: LikeStatus;
  updateLaboratory: Laboratory;
  updateStudent: Student;
};


export type MutationCreateMajorArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateMessageArgs = {
  input: NewMessage;
};


export type MutationCreateUniversityArgs = {
  input: NewUniversity;
};


export type MutationDeleteLaboratoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteStudentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationFavoriteLaboratoryArgs = {
  input: NewLike;
};


export type MutationFavoriteStudentArgs = {
  input: NewLike;
};


export type MutationLoginLaboratoryArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationLoginStudentArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSignupLaboratoryArgs = {
  input: NewLaboratory;
};


export type MutationSignupStudentArgs = {
  input: NewStudent;
};


export type MutationUnfavoriteLaboratoryArgs = {
  input: NewLike;
};


export type MutationUnfavoriteStudentArgs = {
  input: NewLike;
};


export type MutationUpdateLaboratoryArgs = {
  input: NewLaboratoryFields;
};


export type MutationUpdateStudentArgs = {
  input: NewStudentFields;
};

export type NewLaboratory = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type NewLaboratoryFields = {
  comment?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  laboratoryUrl?: InputMaybe<Scalars['String']['input']>;
  majorIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  numStudents?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  professor?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MatchStatus>;
  universityId?: InputMaybe<Scalars['ID']['input']>;
};

export type NewLike = {
  laboratoryId: Scalars['ID']['input'];
  studentId: Scalars['ID']['input'];
};

export type NewMessage = {
  content: Scalars['String']['input'];
  from: UserType;
  messageRoomId: Scalars['ID']['input'];
};

export type NewStudent = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type NewStudentFields = {
  birthday?: InputMaybe<Scalars['Time']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  gpa?: InputMaybe<Scalars['Float']['input']>;
  grade?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  interest?: InputMaybe<Scalars['String']['input']>;
  majorIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  prefectureId?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<MatchStatus>;
  universityId?: InputMaybe<Scalars['ID']['input']>;
};

export type NewUniversity = {
  address: Scalars['String']['input'];
  maxGpa: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  prefectureId: Scalars['ID']['input'];
};

export type Prefecture = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  getAllMajors?: Maybe<Array<Maybe<Major>>>;
  getAllPrefectures?: Maybe<Array<Maybe<Prefecture>>>;
  getAllUniversities?: Maybe<Array<Maybe<University>>>;
  getLikeStatus: LikeStatus;
  getMatchableLaboratories?: Maybe<Array<Maybe<Laboratory>>>;
  getMatchableStudents?: Maybe<Array<Maybe<Student>>>;
  getMessages?: Maybe<Array<Maybe<Message>>>;
  getMessagesByIds?: Maybe<Array<Maybe<Message>>>;
  getStudentLaboratoriesById?: Maybe<StudentLaboratory>;
  getStudentLaboratoriesByLaboratoryId?: Maybe<Array<Maybe<StudentLaboratory>>>;
  getStudentLaboratoriesByStudentId?: Maybe<Array<Maybe<StudentLaboratory>>>;
  laboratory: Laboratory;
  student: Student;
};


export type QueryGetLikeStatusArgs = {
  input: NewLike;
};


export type QueryGetMatchableLaboratoriesArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetMatchableStudentsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetMessagesArgs = {
  messageRoomId: Scalars['ID']['input'];
};


export type QueryGetMessagesByIdsArgs = {
  input: NewLike;
};


export type QueryGetStudentLaboratoriesByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetStudentLaboratoriesByLaboratoryIdArgs = {
  filter?: InputMaybe<LikeStatus>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetStudentLaboratoriesByStudentIdArgs = {
  filter?: InputMaybe<LikeStatus>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLaboratoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStudentArgs = {
  id: Scalars['ID']['input'];
};

export type Student = {
  birthday?: Maybe<Scalars['Time']['output']>;
  comment: Scalars['String']['output'];
  email: Scalars['String']['output'];
  gender: Gender;
  gpa: Scalars['Float']['output'];
  grade: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  imageUrl: Scalars['String']['output'];
  interest: Scalars['String']['output'];
  majors: Array<Major>;
  name: Scalars['String']['output'];
  numLikes: Scalars['Int']['output'];
  password: Scalars['String']['output'];
  prefecture: Prefecture;
  status: MatchStatus;
  uid: Scalars['String']['output'];
  university: University;
};

export type StudentLaboratory = {
  id: Scalars['ID']['output'];
  laboratory: Laboratory;
  status: LikeStatus;
  student: Student;
};

export type University = {
  address: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  maxGpa: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  prefecture: Prefecture;
};

export enum UserType {
  Laboratory = 'LABORATORY',
  Studnet = 'STUDNET'
}

export type LaboratoriesQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type LaboratoriesQuery = { getMatchableLaboratories?: Array<{ id: string, name: string, comment: string, status: MatchStatus, imageUrl: string, university: { name: string }, majors: Array<{ name: string }> }> };

export type GetLikeStatusQueryVariables = Exact<{
  studentId: Scalars['ID']['input'];
  laboratoryId: Scalars['ID']['input'];
}>;


export type GetLikeStatusQuery = { getLikeStatus: LikeStatus };

export type FavoriteLaboratoryMutationVariables = Exact<{
  studentId: Scalars['ID']['input'];
  laboratoryId: Scalars['ID']['input'];
}>;


export type FavoriteLaboratoryMutation = { favoriteLaboratory: LikeStatus };

export type LaboratoryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type LaboratoryQuery = { laboratory: { id: string, name: string, professor: string, numStudents: number, comment: string, status: MatchStatus, imageUrl: string, laboratoryUrl: string, university: { name: string, prefecture: { name: string } }, majors: Array<{ name: string }> } };

export type LoginStudentMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginStudentMutation = { loginStudent: { id: string } };

export type CreateMessageMutationVariables = Exact<{
  input: NewMessage;
}>;


export type CreateMessageMutation = { createMessage?: { messageRoomId: string } };

export type GetMessagesQueryVariables = Exact<{
  messageRoomId: Scalars['ID']['input'];
}>;


export type GetMessagesQuery = { getMessages?: Array<{ messageId: string, from: UserType, content: string, createdAt: any, updatedAt: any }> };

export type GetMessagesByIdsQueryVariables = Exact<{
  input: NewLike;
}>;


export type GetMessagesByIdsQuery = { getMessagesByIds?: Array<{ messageId: string, messageRoomId: string, from: UserType, content: string, createdAt: any, updatedAt: any }> };

export type GetStudentLaboratoriesByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetStudentLaboratoriesByIdQuery = { getStudentLaboratoriesById?: { id: string, student: { name: string }, laboratory: { name: string } } };

export type MessagesQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  filter?: InputMaybe<LikeStatus>;
}>;


export type MessagesQuery = { getStudentLaboratoriesByStudentId?: Array<{ id: string, laboratory: { id: string, name: string, imageUrl: string, university: { name: string } } }> };

export type GetOptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOptionsQuery = { getAllUniversities?: Array<{ id: string, name: string }>, getAllPrefectures?: Array<{ id: string, name: string }>, getAllMajors?: Array<{ id: string, name: string }> };

export type UpdateStudentMutationVariables = Exact<{
  input: NewStudentFields;
}>;


export type UpdateStudentMutation = { updateStudent: { id: string } };

export type SignupStudentMutationVariables = Exact<{
  input: NewStudent;
}>;


export type SignupStudentMutation = { signupStudent: { id: string } };

export type StudentQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type StudentQuery = { student: { name: string, email: string, imageUrl: string, gender: Gender, birthday?: any, grade: number, gpa: number, comment: string, interest: string, status: MatchStatus, numLikes: number, prefecture: { name: string }, university: { maxGpa: number, name: string }, majors: Array<{ name: string }> } };


export const LaboratoriesDocument = gql`
    query Laboratories($id: ID!) {
  getMatchableLaboratories(id: $id) {
    id
    university {
      name
    }
    name
    comment
    majors {
      name
    }
    status
    imageUrl
  }
}
    `;

/**
 * __useLaboratoriesQuery__
 *
 * To run a query within a React component, call `useLaboratoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLaboratoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLaboratoriesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLaboratoriesQuery(baseOptions: Apollo.QueryHookOptions<LaboratoriesQuery, LaboratoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LaboratoriesQuery, LaboratoriesQueryVariables>(LaboratoriesDocument, options);
      }
export function useLaboratoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LaboratoriesQuery, LaboratoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LaboratoriesQuery, LaboratoriesQueryVariables>(LaboratoriesDocument, options);
        }
export type LaboratoriesQueryHookResult = ReturnType<typeof useLaboratoriesQuery>;
export type LaboratoriesLazyQueryHookResult = ReturnType<typeof useLaboratoriesLazyQuery>;
export type LaboratoriesQueryResult = Apollo.QueryResult<LaboratoriesQuery, LaboratoriesQueryVariables>;
export const GetLikeStatusDocument = gql`
    query getLikeStatus($studentId: ID!, $laboratoryId: ID!) {
  getLikeStatus(input: {studentId: $studentId, laboratoryId: $laboratoryId})
}
    `;

/**
 * __useGetLikeStatusQuery__
 *
 * To run a query within a React component, call `useGetLikeStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLikeStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLikeStatusQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *      laboratoryId: // value for 'laboratoryId'
 *   },
 * });
 */
export function useGetLikeStatusQuery(baseOptions: Apollo.QueryHookOptions<GetLikeStatusQuery, GetLikeStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLikeStatusQuery, GetLikeStatusQueryVariables>(GetLikeStatusDocument, options);
      }
export function useGetLikeStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLikeStatusQuery, GetLikeStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLikeStatusQuery, GetLikeStatusQueryVariables>(GetLikeStatusDocument, options);
        }
export type GetLikeStatusQueryHookResult = ReturnType<typeof useGetLikeStatusQuery>;
export type GetLikeStatusLazyQueryHookResult = ReturnType<typeof useGetLikeStatusLazyQuery>;
export type GetLikeStatusQueryResult = Apollo.QueryResult<GetLikeStatusQuery, GetLikeStatusQueryVariables>;
export const FavoriteLaboratoryDocument = gql`
    mutation favoriteLaboratory($studentId: ID!, $laboratoryId: ID!) {
  favoriteLaboratory(input: {studentId: $studentId, laboratoryId: $laboratoryId})
}
    `;
export type FavoriteLaboratoryMutationFn = Apollo.MutationFunction<FavoriteLaboratoryMutation, FavoriteLaboratoryMutationVariables>;

/**
 * __useFavoriteLaboratoryMutation__
 *
 * To run a mutation, you first call `useFavoriteLaboratoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFavoriteLaboratoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [favoriteLaboratoryMutation, { data, loading, error }] = useFavoriteLaboratoryMutation({
 *   variables: {
 *      studentId: // value for 'studentId'
 *      laboratoryId: // value for 'laboratoryId'
 *   },
 * });
 */
export function useFavoriteLaboratoryMutation(baseOptions?: Apollo.MutationHookOptions<FavoriteLaboratoryMutation, FavoriteLaboratoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FavoriteLaboratoryMutation, FavoriteLaboratoryMutationVariables>(FavoriteLaboratoryDocument, options);
      }
export type FavoriteLaboratoryMutationHookResult = ReturnType<typeof useFavoriteLaboratoryMutation>;
export type FavoriteLaboratoryMutationResult = Apollo.MutationResult<FavoriteLaboratoryMutation>;
export type FavoriteLaboratoryMutationOptions = Apollo.BaseMutationOptions<FavoriteLaboratoryMutation, FavoriteLaboratoryMutationVariables>;
export const LaboratoryDocument = gql`
    query Laboratory($id: ID!) {
  laboratory(id: $id) {
    id
    university {
      name
      prefecture {
        name
      }
    }
    name
    professor
    numStudents
    comment
    status
    imageUrl
    laboratoryUrl
    majors {
      name
    }
  }
}
    `;

/**
 * __useLaboratoryQuery__
 *
 * To run a query within a React component, call `useLaboratoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useLaboratoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLaboratoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLaboratoryQuery(baseOptions: Apollo.QueryHookOptions<LaboratoryQuery, LaboratoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LaboratoryQuery, LaboratoryQueryVariables>(LaboratoryDocument, options);
      }
export function useLaboratoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LaboratoryQuery, LaboratoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LaboratoryQuery, LaboratoryQueryVariables>(LaboratoryDocument, options);
        }
export type LaboratoryQueryHookResult = ReturnType<typeof useLaboratoryQuery>;
export type LaboratoryLazyQueryHookResult = ReturnType<typeof useLaboratoryLazyQuery>;
export type LaboratoryQueryResult = Apollo.QueryResult<LaboratoryQuery, LaboratoryQueryVariables>;
export const LoginStudentDocument = gql`
    mutation loginStudent($email: String!, $password: String!) {
  loginStudent(email: $email, password: $password) {
    id
  }
}
    `;
export type LoginStudentMutationFn = Apollo.MutationFunction<LoginStudentMutation, LoginStudentMutationVariables>;

/**
 * __useLoginStudentMutation__
 *
 * To run a mutation, you first call `useLoginStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginStudentMutation, { data, loading, error }] = useLoginStudentMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginStudentMutation(baseOptions?: Apollo.MutationHookOptions<LoginStudentMutation, LoginStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginStudentMutation, LoginStudentMutationVariables>(LoginStudentDocument, options);
      }
export type LoginStudentMutationHookResult = ReturnType<typeof useLoginStudentMutation>;
export type LoginStudentMutationResult = Apollo.MutationResult<LoginStudentMutation>;
export type LoginStudentMutationOptions = Apollo.BaseMutationOptions<LoginStudentMutation, LoginStudentMutationVariables>;
export const CreateMessageDocument = gql`
    mutation createMessage($input: NewMessage!) {
  createMessage(input: $input) {
    messageRoomId
  }
}
    `;
export type CreateMessageMutationFn = Apollo.MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateMessageMutation, CreateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument, options);
      }
export type CreateMessageMutationHookResult = ReturnType<typeof useCreateMessageMutation>;
export type CreateMessageMutationResult = Apollo.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = Apollo.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;
export const GetMessagesDocument = gql`
    query getMessages($messageRoomId: ID!) {
  getMessages(messageRoomId: $messageRoomId) {
    messageId
    from
    content
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetMessagesQuery__
 *
 * To run a query within a React component, call `useGetMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesQuery({
 *   variables: {
 *      messageRoomId: // value for 'messageRoomId'
 *   },
 * });
 */
export function useGetMessagesQuery(baseOptions: Apollo.QueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
      }
export function useGetMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
        }
export type GetMessagesQueryHookResult = ReturnType<typeof useGetMessagesQuery>;
export type GetMessagesLazyQueryHookResult = ReturnType<typeof useGetMessagesLazyQuery>;
export type GetMessagesQueryResult = Apollo.QueryResult<GetMessagesQuery, GetMessagesQueryVariables>;
export const GetMessagesByIdsDocument = gql`
    query getMessagesByIds($input: NewLike!) {
  getMessagesByIds(input: $input) {
    messageId
    messageRoomId
    from
    content
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetMessagesByIdsQuery__
 *
 * To run a query within a React component, call `useGetMessagesByIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesByIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesByIdsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMessagesByIdsQuery(baseOptions: Apollo.QueryHookOptions<GetMessagesByIdsQuery, GetMessagesByIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessagesByIdsQuery, GetMessagesByIdsQueryVariables>(GetMessagesByIdsDocument, options);
      }
export function useGetMessagesByIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessagesByIdsQuery, GetMessagesByIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessagesByIdsQuery, GetMessagesByIdsQueryVariables>(GetMessagesByIdsDocument, options);
        }
export type GetMessagesByIdsQueryHookResult = ReturnType<typeof useGetMessagesByIdsQuery>;
export type GetMessagesByIdsLazyQueryHookResult = ReturnType<typeof useGetMessagesByIdsLazyQuery>;
export type GetMessagesByIdsQueryResult = Apollo.QueryResult<GetMessagesByIdsQuery, GetMessagesByIdsQueryVariables>;
export const GetStudentLaboratoriesByIdDocument = gql`
    query getStudentLaboratoriesById($id: ID!) {
  getStudentLaboratoriesById(id: $id) {
    id
    student {
      name
    }
    laboratory {
      name
    }
  }
}
    `;

/**
 * __useGetStudentLaboratoriesByIdQuery__
 *
 * To run a query within a React component, call `useGetStudentLaboratoriesByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentLaboratoriesByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudentLaboratoriesByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetStudentLaboratoriesByIdQuery(baseOptions: Apollo.QueryHookOptions<GetStudentLaboratoriesByIdQuery, GetStudentLaboratoriesByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStudentLaboratoriesByIdQuery, GetStudentLaboratoriesByIdQueryVariables>(GetStudentLaboratoriesByIdDocument, options);
      }
export function useGetStudentLaboratoriesByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudentLaboratoriesByIdQuery, GetStudentLaboratoriesByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStudentLaboratoriesByIdQuery, GetStudentLaboratoriesByIdQueryVariables>(GetStudentLaboratoriesByIdDocument, options);
        }
export type GetStudentLaboratoriesByIdQueryHookResult = ReturnType<typeof useGetStudentLaboratoriesByIdQuery>;
export type GetStudentLaboratoriesByIdLazyQueryHookResult = ReturnType<typeof useGetStudentLaboratoriesByIdLazyQuery>;
export type GetStudentLaboratoriesByIdQueryResult = Apollo.QueryResult<GetStudentLaboratoriesByIdQuery, GetStudentLaboratoriesByIdQueryVariables>;
export const MessagesDocument = gql`
    query Messages($id: ID!, $filter: LikeStatus) {
  getStudentLaboratoriesByStudentId(id: $id, filter: $filter) {
    id
    laboratory {
      id
      name
      university {
        name
      }
      imageUrl
    }
  }
}
    `;

/**
 * __useMessagesQuery__
 *
 * To run a query within a React component, call `useMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesQuery({
 *   variables: {
 *      id: // value for 'id'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useMessagesQuery(baseOptions: Apollo.QueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, options);
      }
export function useMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, options);
        }
export type MessagesQueryHookResult = ReturnType<typeof useMessagesQuery>;
export type MessagesLazyQueryHookResult = ReturnType<typeof useMessagesLazyQuery>;
export type MessagesQueryResult = Apollo.QueryResult<MessagesQuery, MessagesQueryVariables>;
export const GetOptionsDocument = gql`
    query GetOptions {
  getAllUniversities {
    id
    name
  }
  getAllPrefectures {
    id
    name
  }
  getAllMajors {
    id
    name
  }
}
    `;

/**
 * __useGetOptionsQuery__
 *
 * To run a query within a React component, call `useGetOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOptionsQuery(baseOptions?: Apollo.QueryHookOptions<GetOptionsQuery, GetOptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOptionsQuery, GetOptionsQueryVariables>(GetOptionsDocument, options);
      }
export function useGetOptionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOptionsQuery, GetOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOptionsQuery, GetOptionsQueryVariables>(GetOptionsDocument, options);
        }
export type GetOptionsQueryHookResult = ReturnType<typeof useGetOptionsQuery>;
export type GetOptionsLazyQueryHookResult = ReturnType<typeof useGetOptionsLazyQuery>;
export type GetOptionsQueryResult = Apollo.QueryResult<GetOptionsQuery, GetOptionsQueryVariables>;
export const UpdateStudentDocument = gql`
    mutation updateStudent($input: NewStudentFields!) {
  updateStudent(input: $input) {
    id
  }
}
    `;
export type UpdateStudentMutationFn = Apollo.MutationFunction<UpdateStudentMutation, UpdateStudentMutationVariables>;

/**
 * __useUpdateStudentMutation__
 *
 * To run a mutation, you first call `useUpdateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStudentMutation, { data, loading, error }] = useUpdateStudentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateStudentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStudentMutation, UpdateStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStudentMutation, UpdateStudentMutationVariables>(UpdateStudentDocument, options);
      }
export type UpdateStudentMutationHookResult = ReturnType<typeof useUpdateStudentMutation>;
export type UpdateStudentMutationResult = Apollo.MutationResult<UpdateStudentMutation>;
export type UpdateStudentMutationOptions = Apollo.BaseMutationOptions<UpdateStudentMutation, UpdateStudentMutationVariables>;
export const SignupStudentDocument = gql`
    mutation signupStudent($input: NewStudent!) {
  signupStudent(input: $input) {
    id
  }
}
    `;
export type SignupStudentMutationFn = Apollo.MutationFunction<SignupStudentMutation, SignupStudentMutationVariables>;

/**
 * __useSignupStudentMutation__
 *
 * To run a mutation, you first call `useSignupStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupStudentMutation, { data, loading, error }] = useSignupStudentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupStudentMutation(baseOptions?: Apollo.MutationHookOptions<SignupStudentMutation, SignupStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupStudentMutation, SignupStudentMutationVariables>(SignupStudentDocument, options);
      }
export type SignupStudentMutationHookResult = ReturnType<typeof useSignupStudentMutation>;
export type SignupStudentMutationResult = Apollo.MutationResult<SignupStudentMutation>;
export type SignupStudentMutationOptions = Apollo.BaseMutationOptions<SignupStudentMutation, SignupStudentMutationVariables>;
export const StudentDocument = gql`
    query Student($id: ID!) {
  student(id: $id) {
    name
    email
    prefecture {
      name
    }
    imageUrl
    gender
    birthday
    grade
    gpa
    comment
    interest
    status
    university {
      maxGpa
      name
    }
    majors {
      name
    }
    numLikes
  }
}
    `;

/**
 * __useStudentQuery__
 *
 * To run a query within a React component, call `useStudentQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStudentQuery(baseOptions: Apollo.QueryHookOptions<StudentQuery, StudentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StudentQuery, StudentQueryVariables>(StudentDocument, options);
      }
export function useStudentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StudentQuery, StudentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StudentQuery, StudentQueryVariables>(StudentDocument, options);
        }
export type StudentQueryHookResult = ReturnType<typeof useStudentQuery>;
export type StudentLazyQueryHookResult = ReturnType<typeof useStudentLazyQuery>;
export type StudentQueryResult = Apollo.QueryResult<StudentQuery, StudentQueryVariables>;