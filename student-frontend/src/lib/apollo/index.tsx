import { ApolloClient, InMemoryCache} from '@apollo/client';

// TODO: Replace this with your GraphQL endpoint
export const client = new ApolloClient({
    uri: 'https://student-laboratory-matching-app-production.up.railway.app/query',
    cache: new InMemoryCache(),
  });