import { ApolloClient, InMemoryCache} from '@apollo/client';

// TODO: Replace this with your GraphQL endpoint
export const client = new ApolloClient({
    uri: 'https://flyby-router-demo.herokuapp.com/',
    cache: new InMemoryCache(),
  });