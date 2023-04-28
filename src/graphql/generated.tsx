import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  tasks?: Maybe<Array<Maybe<Task>>>;
};

export type Task = {
  __typename?: 'Task';
  content: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Fetch_All_TasksQueryVariables = Exact<{ [key: string]: never; }>;


export type Fetch_All_TasksQuery = { __typename?: 'Query', tasks?: Array<{ __typename?: 'Task', id: string, title: string, content: string } | null> | null };


export const Fetch_All_TasksDocument = gql`
    query Fetch_All_Tasks {
  tasks {
    id
    title
    content
  }
}
    `;

/**
 * __useFetch_All_TasksQuery__
 *
 * To run a query within a React component, call `useFetch_All_TasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetch_All_TasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetch_All_TasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetch_All_TasksQuery(baseOptions?: Apollo.QueryHookOptions<Fetch_All_TasksQuery, Fetch_All_TasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Fetch_All_TasksQuery, Fetch_All_TasksQueryVariables>(Fetch_All_TasksDocument, options);
      }
export function useFetch_All_TasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Fetch_All_TasksQuery, Fetch_All_TasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Fetch_All_TasksQuery, Fetch_All_TasksQueryVariables>(Fetch_All_TasksDocument, options);
        }
export type Fetch_All_TasksQueryHookResult = ReturnType<typeof useFetch_All_TasksQuery>;
export type Fetch_All_TasksLazyQueryHookResult = ReturnType<typeof useFetch_All_TasksLazyQuery>;
export type Fetch_All_TasksQueryResult = Apollo.QueryResult<Fetch_All_TasksQuery, Fetch_All_TasksQueryVariables>;