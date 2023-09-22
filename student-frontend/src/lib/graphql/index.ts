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
  from: MessageFrom;
  messageId: Scalars['ID']['output'];
  messageRoomId: Scalars['ID']['output'];
  updatedAt: Scalars['Time']['output'];
};

export enum MessageFrom {
  Laboratory = 'LABORATORY',
  Studnet = 'STUDNET'
}

export type Mutation = {
  createMajor: Major;
  createMessage?: Maybe<Message>;
  createUniversity: University;
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
  from: MessageFrom;
  messageRoomId: Scalars['ID']['input'];
};

export type NewStudent = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type NewStudentFields = {
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

export type LaboratoriesQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type LaboratoriesQuery = { getMatchableLaboratories?: Array<{ id: string, name: string, comment: string, status: MatchStatus, university: { name: string }, majors: Array<{ name: string }> }> };

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


export type GetMessagesQuery = { getMessages?: Array<{ messageId: string, from: MessageFrom, content: string, createdAt: any, updatedAt: any }> };

export type GetMessagesByIdsQueryVariables = Exact<{
  input: NewLike;
}>;


export type GetMessagesByIdsQuery = { getMessagesByIds?: Array<{ messageId: string, messageRoomId: string, from: MessageFrom, content: string, createdAt: any, updatedAt: any }> };

export type GetStudentLaboratoriesByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetStudentLaboratoriesByIdQuery = { getStudentLaboratoriesById?: { id: string, student: { name: string }, laboratory: { name: string } } };

export type GetAllPrefecturesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPrefecturesQuery = { getAllPrefectures?: Array<{ id: string, name: string }> };

export type GetAllUniversitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUniversitiesQuery = { getAllUniversities?: Array<{ id: string, name: string }> };

export type GetAllMajorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMajorsQuery = { getAllMajors?: Array<{ id: string, name: string }> };

export type UpdateStudentMutationVariables = Exact<{
  input: NewStudentFields;
}>;


export type UpdateStudentMutation = { updateStudent: { id: string } };

export type StudentQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type StudentQuery = { student: { id: string, name: string } };


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
export const GetAllPrefecturesDocument = gql`
    query getAllPrefectures {
  getAllPrefectures {
    id
    name
  }
}
    `;

/**
 * __useGetAllPrefecturesQuery__
 *
 * To run a query within a React component, call `useGetAllPrefecturesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPrefecturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPrefecturesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPrefecturesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPrefecturesQuery, GetAllPrefecturesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPrefecturesQuery, GetAllPrefecturesQueryVariables>(GetAllPrefecturesDocument, options);
      }
export function useGetAllPrefecturesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPrefecturesQuery, GetAllPrefecturesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPrefecturesQuery, GetAllPrefecturesQueryVariables>(GetAllPrefecturesDocument, options);
        }
export type GetAllPrefecturesQueryHookResult = ReturnType<typeof useGetAllPrefecturesQuery>;
export type GetAllPrefecturesLazyQueryHookResult = ReturnType<typeof useGetAllPrefecturesLazyQuery>;
export type GetAllPrefecturesQueryResult = Apollo.QueryResult<GetAllPrefecturesQuery, GetAllPrefecturesQueryVariables>;
export const GetAllUniversitiesDocument = gql`
    query getAllUniversities {
  getAllUniversities {
    id
    name
  }
}
    `;

/**
 * __useGetAllUniversitiesQuery__
 *
 * To run a query within a React component, call `useGetAllUniversitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUniversitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUniversitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUniversitiesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUniversitiesQuery, GetAllUniversitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUniversitiesQuery, GetAllUniversitiesQueryVariables>(GetAllUniversitiesDocument, options);
      }
export function useGetAllUniversitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUniversitiesQuery, GetAllUniversitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUniversitiesQuery, GetAllUniversitiesQueryVariables>(GetAllUniversitiesDocument, options);
        }
export type GetAllUniversitiesQueryHookResult = ReturnType<typeof useGetAllUniversitiesQuery>;
export type GetAllUniversitiesLazyQueryHookResult = ReturnType<typeof useGetAllUniversitiesLazyQuery>;
export type GetAllUniversitiesQueryResult = Apollo.QueryResult<GetAllUniversitiesQuery, GetAllUniversitiesQueryVariables>;
export const GetAllMajorsDocument = gql`
    query getAllMajors {
  getAllMajors {
    id
    name
  }
}
    `;

/**
 * __useGetAllMajorsQuery__
 *
 * To run a query within a React component, call `useGetAllMajorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMajorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMajorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMajorsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllMajorsQuery, GetAllMajorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMajorsQuery, GetAllMajorsQueryVariables>(GetAllMajorsDocument, options);
      }
export function useGetAllMajorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMajorsQuery, GetAllMajorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMajorsQuery, GetAllMajorsQueryVariables>(GetAllMajorsDocument, options);
        }
export type GetAllMajorsQueryHookResult = ReturnType<typeof useGetAllMajorsQuery>;
export type GetAllMajorsLazyQueryHookResult = ReturnType<typeof useGetAllMajorsLazyQuery>;
export type GetAllMajorsQueryResult = Apollo.QueryResult<GetAllMajorsQuery, GetAllMajorsQueryVariables>;
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
export const StudentDocument = gql`
    query Student($id: ID!) {
  student(id: $id) {
    id
    name
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