import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {ChatItem} from '../components';
import ApplicationStyles from '../styles/appstyles';

const chats = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    description: 'Hey there',
    user: {
      avatarUrl:
        'https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e',
    },
  },
  {
    id: 2,
    title: 'Conversation 2',
    description: 'Hey there',
    user: {
      avatarUrl:
        'https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e',
    },
  },
];

export const ConversationsScreen = () => (
  <View style={styles.container}>
    <FlatList
      data={chats}
      renderItem={({item}) => <ChatItem {...item} />}
      keyExtractor={(item) => `message-${item.id}`}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  </View>
);

const styles = StyleSheet.create({
  ...ApplicationStyles,
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0, .1)',
  },
});
