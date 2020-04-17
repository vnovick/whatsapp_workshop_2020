import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { useSubscription, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Message from '../components/Message';
import Compose from '../components/Compose';
import ApplicationStyles from '../styles/appstyles';
import { getMessagesById, postMessage } from '../services/api';

export default ({ route }) => {
  const GET_MESSAGES = gql`
  subscription($user_id: String!) {
    messages(where: {user_id: {_eq: $user_id}}) {
      message
    }
  }
`;
  const ADD_MESSAGE = gql`
    mutation AddMessage($message: String!, $user_id: String!, $conversation_id: String!) {
      insert_messages(objects: {message: $message, user_id: $user_id, conversation_id: $conversation_id}) {
        message
      }
    }
  `;

  const [addMessage, { dataMessage }] = useMutation(ADD_MESSAGE);

  const { loading, data, error } = useSubscription(GET_MESSAGES, {
    variables: { user_id: route.params.userId }
  });

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
          data={data.messages}
          renderItem={({ item }) => <Message key={item.id} {...item} />}
          keyExtractor={(item, index) => `message-${index}`}
        />
        <Compose userId={route.params.userId} conversationId={route.params.conversationId} submit={addMessage} />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ...ApplicationStyles,
});
