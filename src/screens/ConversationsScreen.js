import React from 'react';
import {View} from 'react-native';
import {ChatItem} from '../components';

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
  <View>
    {chats.map((chat) => (
      <ChatItem key={chat.id} {...chat} />
    ))}
  </View>
);
