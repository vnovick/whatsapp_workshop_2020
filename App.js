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
  StyleSheet,
  Button,
  StatusBar,
  Platform,
} from 'react-native';

import ConvesationsScreen from './src/screens/Conversations';
import ChatViewScreen from './src/screens/ChatViewScreen';

const App: () => React$Node = () => {
  const [isConversations, setIsConversations] = useState(true);

  function renderScreen() {
    return isConversations ? <ConvesationsScreen /> : <ChatViewScreen />;
  }
  return (
    <>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      />
      <SafeAreaView style={styles.container}>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
