import {ApolloClient, InMemoryCache, split, HttpLink} from '@apollo/client';
import {getMainDefinition} from '@apollo/client/utilities';
import {WebSocketLink} from '@apollo/client/link/ws';

// Create an http link:
const httpLink = new HttpLink({
  uri: 'https://whatsapp-workshop-2020.herokuapp.com/v1/graphql',
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: 'wss://whatsapp-workshop-2020.herokuapp.com/v1/graphql',
  options: {
    reconnect: true,
  },
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({query}) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const cache = new InMemoryCache();
const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: splitLink,
});

export default client;
