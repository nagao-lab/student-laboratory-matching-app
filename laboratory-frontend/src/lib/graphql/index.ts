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

export type LaboratoryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type LaboratoryQuery = { laboratory: { id: string, name: string, professor: string, numStudents: number, comment: string, status: MatchStatus, imageUrl: string, laboratoryUrl: string, email: string, university: { name: string, prefecture: { name: string } }, majors: Array<{ name: string }> } };

export type LoginLaboratoryMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginLaboratoryMutation = { loginLaboratory: { id: string } };

export type GetOptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOptionsQuery = { getAllUniversities?: Array<{ id: string, name: string }>, getAllPrefectures?: Array<{ id: string, name: string }>, getAllMajors?: Array<{ id: string, name: string }> };

export type UpdateLaboratoryMutationVariables = Exact<{
  input: NewLaboratoryFields;
}>;


export type UpdateLaboratoryMutation = { updateLaboratory: { id: string } };

export type SignupLaboratoryMutationVariables = Exact<{
  input: NewLaboratory;
}>;


export type SignupLaboratoryMutation = { signupLaboratory: { id: string } };

export type StudentQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type StudentQuery = { student: { name: string, email: string, imageUrl: string, gender: Gender, birthday?: any, grade: number, gpa: number, comment: string, interest: string, status: MatchStatus, numLikes: number, prefecture: { name: string }, university: { maxGpa: number, name: string }, majors: Array<{ name: string }> } };

export type StudentsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type StudentsQuery = { getMatchableStudents?: Array<{ id: string, name: string, comment: string, status: MatchStatus, imageUrl: string, university: { name: string }, majors: Array<{ name: string }> }> };

export type GetLikeStatusQueryVariables = Exact<{
  laboratoryId: Scalars['ID']['input'];
  studentId: Scalars['ID']['input'];
}>;


export type GetLikeStatusQuery = { getLikeStatus: LikeStatus };

export type FavoriteStudentMutationVariables = Exact<{
  laboratoryId: Scalars['ID']['input'];
  studentId: Scalars['ID']['input'];
}>;


export type FavoriteStudentMutation = { favoriteStudent: LikeStatus };


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
    email
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
export const LoginLaboratoryDocument = gql`
    mutation loginLaboratory($email: String!, $password: String!) {
  loginLaboratory(email: $email, password: $password) {
    id
  }
}
    `;
export type LoginLaboratoryMutationFn = Apollo.MutationFunction<LoginLaboratoryMutation, LoginLaboratoryMutationVariables>;

/**
 * __useLoginLaboratoryMutation__
 *
 * To run a mutation, you first call `useLoginLaboratoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginLaboratoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginLaboratoryMutation, { data, loading, error }] = useLoginLaboratoryMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginLaboratoryMutation(baseOptions?: Apollo.MutationHookOptions<LoginLaboratoryMutation, LoginLaboratoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginLaboratoryMutation, LoginLaboratoryMutationVariables>(LoginLaboratoryDocument, options);
      }
export type LoginLaboratoryMutationHookResult = ReturnType<typeof useLoginLaboratoryMutation>;
export type LoginLaboratoryMutationResult = Apollo.MutationResult<LoginLaboratoryMutation>;
export type LoginLaboratoryMutationOptions = Apollo.BaseMutationOptions<LoginLaboratoryMutation, LoginLaboratoryMutationVariables>;
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
export const UpdateLaboratoryDocument = gql`
    mutation updateLaboratory($input: NewLaboratoryFields!) {
  updateLaboratory(input: $input) {
    id
  }
}
    `;
export type UpdateLaboratoryMutationFn = Apollo.MutationFunction<UpdateLaboratoryMutation, UpdateLaboratoryMutationVariables>;

/**
 * __useUpdateLaboratoryMutation__
 *
 * To run a mutation, you first call `useUpdateLaboratoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLaboratoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLaboratoryMutation, { data, loading, error }] = useUpdateLaboratoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateLaboratoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLaboratoryMutation, UpdateLaboratoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLaboratoryMutation, UpdateLaboratoryMutationVariables>(UpdateLaboratoryDocument, options);
      }
export type UpdateLaboratoryMutationHookResult = ReturnType<typeof useUpdateLaboratoryMutation>;
export type UpdateLaboratoryMutationResult = Apollo.MutationResult<UpdateLaboratoryMutation>;
export type UpdateLaboratoryMutationOptions = Apollo.BaseMutationOptions<UpdateLaboratoryMutation, UpdateLaboratoryMutationVariables>;
export const SignupLaboratoryDocument = gql`
    mutation signupLaboratory($input: NewLaboratory!) {
  signupLaboratory(input: $input) {
    id
  }
}
    `;
export type SignupLaboratoryMutationFn = Apollo.MutationFunction<SignupLaboratoryMutation, SignupLaboratoryMutationVariables>;

/**
 * __useSignupLaboratoryMutation__
 *
 * To run a mutation, you first call `useSignupLaboratoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupLaboratoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupLaboratoryMutation, { data, loading, error }] = useSignupLaboratoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupLaboratoryMutation(baseOptions?: Apollo.MutationHookOptions<SignupLaboratoryMutation, SignupLaboratoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupLaboratoryMutation, SignupLaboratoryMutationVariables>(SignupLaboratoryDocument, options);
      }
export type SignupLaboratoryMutationHookResult = ReturnType<typeof useSignupLaboratoryMutation>;
export type SignupLaboratoryMutationResult = Apollo.MutationResult<SignupLaboratoryMutation>;
export type SignupLaboratoryMutationOptions = Apollo.BaseMutationOptions<SignupLaboratoryMutation, SignupLaboratoryMutationVariables>;
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
export const StudentsDocument = gql`
    query Students($id: ID!) {
  getMatchableStudents(id: $id) {
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
 * __useStudentsQuery__
 *
 * To run a query within a React component, call `useStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStudentsQuery(baseOptions: Apollo.QueryHookOptions<StudentsQuery, StudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StudentsQuery, StudentsQueryVariables>(StudentsDocument, options);
      }
export function useStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StudentsQuery, StudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StudentsQuery, StudentsQueryVariables>(StudentsDocument, options);
        }
export type StudentsQueryHookResult = ReturnType<typeof useStudentsQuery>;
export type StudentsLazyQueryHookResult = ReturnType<typeof useStudentsLazyQuery>;
export type StudentsQueryResult = Apollo.QueryResult<StudentsQuery, StudentsQueryVariables>;
export const GetLikeStatusDocument = gql`
    query getLikeStatus($laboratoryId: ID!, $studentId: ID!) {
  getLikeStatus(input: {laboratoryId: $laboratoryId, studentId: $studentId})
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
 *      laboratoryId: // value for 'laboratoryId'
 *      studentId: // value for 'studentId'
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
export const FavoriteStudentDocument = gql`
    mutation favoriteStudent($laboratoryId: ID!, $studentId: ID!) {
  favoriteStudent(input: {laboratoryId: $laboratoryId, studentId: $studentId})
}
    `;
export type FavoriteStudentMutationFn = Apollo.MutationFunction<FavoriteStudentMutation, FavoriteStudentMutationVariables>;

/**
 * __useFavoriteStudentMutation__
 *
 * To run a mutation, you first call `useFavoriteStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFavoriteStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [favoriteStudentMutation, { data, loading, error }] = useFavoriteStudentMutation({
 *   variables: {
 *      laboratoryId: // value for 'laboratoryId'
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useFavoriteStudentMutation(baseOptions?: Apollo.MutationHookOptions<FavoriteStudentMutation, FavoriteStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FavoriteStudentMutation, FavoriteStudentMutationVariables>(FavoriteStudentDocument, options);
      }
export type FavoriteStudentMutationHookResult = ReturnType<typeof useFavoriteStudentMutation>;
export type FavoriteStudentMutationResult = Apollo.MutationResult<FavoriteStudentMutation>;
export type FavoriteStudentMutationOptions = Apollo.BaseMutationOptions<FavoriteStudentMutation, FavoriteStudentMutationVariables>;