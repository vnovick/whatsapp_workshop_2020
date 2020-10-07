/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, Button, StatusBar, StyleSheet} from 'react-native';
import {ConversationsScreen, ChatViewScreen} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
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
        <Stack.Screen name="Conversations" component={ConversationsScreen} />
        <Stack.Screen
          name="ChatViewScreen"
          component={ChatViewScreen}
          options={({route, navigation}) => ({
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
    </NavigationContainer>
  );
};

export default App;
