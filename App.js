/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  Platform,
  Button,
  StatusBar,
  StyleSheet,
} from 'react-native';
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
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
