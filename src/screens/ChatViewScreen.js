import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Message, Compose} from '../components';
import ApplicationStyles from '../styles/appstyles';
const messages = [
  {
    id: 1,
    userId: 1,
    message: 'Lorem Ipsum',
  },
  {
    id: 2,
    userId: 2,
    message: 'Lorem Ipsum 2',
  },
];

export const ChatViewScreen = () => (
  <View style={styles.container}>
    {messages.map((message) => (
      <Message key={message.id} {...message} />
    ))}
    <Compose />
  </View>
);

const styles = StyleSheet.create({
  ...ApplicationStyles,
});
