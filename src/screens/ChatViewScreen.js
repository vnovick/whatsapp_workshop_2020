import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Message, Compose} from '../components';
import ApplicationStyles from '../styles/appstyles';
import {getMessagesById, postMessage} from '../services/api';

export const ChatViewScreen = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const result = await getMessagesById();
    setMessages(result);
  };
  useEffect(() => {
    fetchMessages();
  }, [messages]);
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0;

  return (
    <ImageBackground
      source={require('../assets/imgs/background.png')}
      style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <FlatList
          style={styles.container}
          data={messages}
          renderItem={({item}) => <Message key={item.id} {...item} />}
          keyExtractor={(item, index) => `message-${index}`}
        />
        <Compose submit={postMessage} />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ...ApplicationStyles,
});
