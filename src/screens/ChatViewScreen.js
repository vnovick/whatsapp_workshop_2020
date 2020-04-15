import React from 'react';
import {View, StyleSheet} from 'react-native';
import Message from '../components/Message';
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

export default () => {
  return (
    <View style={styles.container}>
      {messages.map(message => (
        <Message key={message.id} {...message} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  ...ApplicationStyles,
});
