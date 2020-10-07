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
import {HeaderHeightContext} from '@react-navigation/stack';

export const ChatViewScreen = ({route}) => {
  const {userId} = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const result = await getMessagesById(userId);
      setMessages(result);
    };
    fetchMessages();
  }, [userId, messages]);
  return (
    <ImageBackground
      source={require('../assets/imgs/background.png')}
      style={styles.container}>
      <HeaderHeightContext.Consumer>
        {(headerHeight) => (
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={headerHeight}>
            <FlatList
              style={styles.container}
              data={messages}
              renderItem={({item}) => <Message key={item.id} {...item} />}
              keyExtractor={(item, index) => `message-${index}`}
            />
            <Compose submit={postMessage} />
          </KeyboardAvoidingView>
        )}
      </HeaderHeightContext.Consumer>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ...ApplicationStyles,
});
