import React from 'react';
import {View, Image, StyleSheet, Platform} from 'react-native';

export const Avatar = ({src}) => (
  <View style={styles.avatarContainer}>
    <View style={styles.avatarMask}>
      <Image style={styles.avatar} source={{uri: src}} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  avatarContainer: {
    justifyContent: 'center',
    flex: 2,
  },
  avatarMask: {
    width: 40,
    height: 40,
    overflow: 'hidden',
    borderRadius: 20,
  },
  avatar: {
    width: 40,
    height: 40,
  },
});
