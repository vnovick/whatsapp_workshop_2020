import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default ({title, description}) => {
  return (
    <View style={styles.chatItem}>
      <View style={styles.content}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.label}>Description</Text>
      </View>
      <View style={styles.navLabel}>
        <Text style={styles.label}>Yesterday</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatItem: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 24,
    marginLeft: 24,
  },
  content: {
    flex: 5,
  },
  navLabel: {
    flex: 2,
    alignItems: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
  },
  label: {
    color: 'rgba(0,0,0,.5)',
  },
  arrow: {
    color: 'rgba(0,0,0,.5)',
  },
});
