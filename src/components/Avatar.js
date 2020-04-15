import React from 'react';
import {View, Image, StyleSheet, Platform} from 'react-native';

export default ({src}) => (
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
    borderRadius: Platform.OS === 'ios' ? 20 : 80,
    overflow: 'hidden',
  },
  avatar: {
    resizeMode: 'cover',
    width: 40,
    height: 40,
  },
});
