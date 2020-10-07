import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {ChatItem} from '../components';
import ApplicationStyles from '../styles/appstyles';
import {useSubscription, gql} from '@apollo/client';
const GET_CONVERSATIONS = gql`
  subscription {
    conversations {
      id
      title
      content
      user {
        avatarUrl
      }
    }
  }
`;

export const ConversationsScreen = ({navigation}) => {
  const {loading, data, error} = useSubscription(GET_CONVERSATIONS);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text>{JSON.stringify(error)}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data.conversations}
        renderItem={({item, index}) => (
          <ChatItem {...item} navigate={navigation.navigate} index={index} />
        )}
        keyExtractor={(item) => `message-${item.id}`}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ...ApplicationStyles,
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0, .1)',
  },
});
