import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ChatItem} from '../components';
import ApplicationStyles from '../styles/appstyles';

const chats = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    description: 'Hey there',
    user: {
      avatar: 'http://www.codetic.net/demo/templates/Privado/img/avatar.png',
    },
  },
];

export const ConversationsScreen = () => (
  <View style={styles.container}>
    {chats.map((chat) => (
      <ChatItem key={chat.id} {...chat} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  ...ApplicationStyles,
});
