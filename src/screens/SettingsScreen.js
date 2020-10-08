import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import ApplicationStyles from '../styles/appstyles';
import {getChats} from '../services/api';

export const SettingsScreen = ({navigation}) => {
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
      <View style={styles.main}>
        <Text>Settings Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ...ApplicationStyles,
  main: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
  },
});
