import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, FlatList, View, StyleSheet} from 'react-native';
import ChatItem from '../components/ChatItem';
import ApplicationStyles from '../styles/appstyles';
import {getChats} from '../services/api';
import {useSubscription} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const GET_CONVERSATIONS = gql`
  subscription {
    conversations {
      title
      content
      user {
        avatarUrl
      }
    }
  }
`;

export default ({navigation}) => {
  const [chats, setChats] = useState([]);

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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.conversations}
        renderItem={({item}) => (
          <ChatItem {...item} navigate={navigation.navigate} />
        )}
        keyExtractor={item => `message-${item.id}`}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ...ApplicationStyles,
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0, .1)',
  },
});
