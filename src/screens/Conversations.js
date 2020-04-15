import React, {useState, useEffect} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import ChatItem from '../components/ChatItem';
import ApplicationStyles from '../styles/appstyles';
import {getChats} from '../services/api';

export default () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const result = await getChats();
    setChats(result);
  };
  useEffect(() => {
    fetchChats();
  }, [chats]);
  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={({item}) => <ChatItem {...item} />}
        keyExtractor={item => `message-${item.id}`}
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
