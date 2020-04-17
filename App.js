/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConvesationsScreen from './src/screens/Conversations';
import ChatViewScreen from './src/screens/ChatViewScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloProvider } from '@apollo/react-hooks';
// Create an http link:
const httpLink = new HttpLink({
  uri: 'https://whatsapp-workshop-2020.herokuapp.com/v1/graphql',
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `wss://whatsapp-workshop-2020.herokuapp.com/v1/graphql`,
  options: {
    reconnect: true,
  },
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
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
  link: link,
});

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <>
          <StatusBar
            barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
          />
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#006655',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
            <Stack.Screen name="Conversations" component={ConvesationsScreen} />
            <Stack.Screen
              name="ChatViewScreen"
              component={ChatViewScreen}
              options={({ route, navigation }) => ({
                title: route.params?.title,
                headerLeft: () => (
                  <Icon
                    name="chevron-left"
                    size={40}
                    color="#ffffff"
                    onPress={() => navigation.goBack()}
                  />
                ),
              })}
            />
          </Stack.Navigator>
        </>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
