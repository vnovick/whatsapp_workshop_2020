import React from 'react';
import {View, Text} from 'react-native';

export const ChatItem = ({title, description}) => (
  <View>
    <Text>{title}</Text>
    <Text>{description}</Text>
  </View>
);
