import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default ({message, userId}) => {
  return (
    <View
      style={[styles.message, userId !== 1 ? styles.incomingMessage : null]}>
      <Text>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    width: '70%',
    margin: 10,
    padding: 10,
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
    alignSelf: 'flex-end',
    backgroundColor: '#E1FFC7',
    borderRadius: 10,
  },
  incomingMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
});
