/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet, StatusBar, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ConvesationsScreen from './src/screens/Conversations';
import ChatViewScreen from './src/screens/ChatViewScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
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
      </>
    </NavigationContainer>
  );
};

export default App;
