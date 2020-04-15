import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Message from '../components/Message';
import Compose from '../components/Compose';
import ApplicationStyles from '../styles/appstyles';
import {getMessagesById, postMessage} from '../services/api';

export default () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const result = await getMessagesById();
    setMessages(result);
  };
  useEffect(() => {
    fetchMessages();
  }, [messages]);

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;

  return (
    <ImageBackground
      source={require('../assets/imgs/background.png')}
      style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={styles.container}>
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
