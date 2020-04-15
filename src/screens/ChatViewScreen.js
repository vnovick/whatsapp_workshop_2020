import React from 'react';
import {ImageBackground, StyleSheet, FlatList} from 'react-native';
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
    <ImageBackground
      source={require('../assets/imgs/background.png')}
      style={styles.container}>
      <FlatList
        style={styles.container}
        data={messages}
        renderItem={({item}) => <Message key={item.id} {...item} />}
        keyExtractor={(item, index) => `message-${index}`}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ...ApplicationStyles,
});
