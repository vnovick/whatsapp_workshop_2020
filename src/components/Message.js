import React from 'react';
import {Text, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {MY_USER} from '../screens/ChatViewScreen';
export const Message = ({message, userId}) => {
  console.log(userId);
  const incoming = userId !== MY_USER;
  return (
    <Animatable.View
      duration={200}
      animation={incoming ? 'slideInLeft' : 'slideInRight'}
      style={[styles.message, incoming ? styles.incomingMessage : null]}>
      <Text>{message}</Text>
    </Animatable.View>
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
