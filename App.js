/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, Button, StatusBar} from 'react-native';
import {ConversationsScreen, ChatViewScreen} from './src/screens';

const App: () => React$Node = () => {
  const [isConversations, setIsConversations] = useState(true);
  const currentScreen = isConversations ? (
    <ConversationsScreen />
  ) : (
    <ChatViewScreen />
  );
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {currentScreen}
        <Button
          title={
            isConversations
              ? 'Go to ChatViewScreen'
              : 'Go to Conversations Screen'
          }
          onPress={() => setIsConversations(!isConversations)}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
