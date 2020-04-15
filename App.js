/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Button, StatusBar} from 'react-native';

import ConvesationsScreen from './src/screens/Conversations';
import ChatViewScreen from './src/screens/ChatViewScreen';

const App: () => React$Node = () => {
  const [isConversations, setIsConversations] = useState(true);

  function renderScreen() {
    return isConversations ? <ConvesationsScreen /> : <ChatViewScreen />;
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {renderScreen()}
        <Button
          title={
            isConversations
              ? 'Go to ChatViewScreen'
              : 'Go to Conversations Screen'
          }
          onPress={() => {
            setIsConversations(!isConversations);
          }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
