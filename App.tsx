import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import RootNavigator from './src/navigator/RootNavigator';
import {
  REACT_APP_APOLLO_SERVER_URI,
} from '@env';

// Initialize the ApolloClient
const client = new ApolloClient({
  uri: REACT_APP_APOLLO_SERVER_URI,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
