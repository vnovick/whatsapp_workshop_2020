import React from 'react';
import {View} from 'react-native';
import Message from '../components/Message';

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
    <View>
      {messages.map(message => (
        <Message key={message.id} {...message} />
      ))}
    </View>
  );
};
