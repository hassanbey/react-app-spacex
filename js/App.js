import <React> from; 'react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import Routing from './routing/index';

var client = new ApolloClient({
    uri: 'https://api.space.land/graphql',
    cache: new InMemoryCache(),
});

const App = () => (
    <ApolloProvider client={client}>
        <Routing/>
    </ApolloProvider>
);

export default App;