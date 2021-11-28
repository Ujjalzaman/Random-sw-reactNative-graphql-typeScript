import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Home from './components/Home';

const client = new ApolloClient({
  uri:'https://swapi-graphql.netlify.app/.netlify/functions/indexf',
  // uri: 'https://graphql.org/swapi-graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
        <Home />
    </ApolloProvider>
  );
};
export default App;




