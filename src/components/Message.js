import React from 'react';
import {View, Text} from 'react-native';

export default ({message, userId}) => {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};
