import React, {useRef, useEffect} from 'react';
import {View, Text, Animated, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from './';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ChatItem = ({id, index, title, description, user, navigate}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(100 * index),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [index, animatedValue]);

  return (
    <Animated.View
      style={{
        opacity: animatedValue,
        transform: [
          {
            translateX: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [-100, 0],
            }),
          },
        ],
      }}>
      <TouchableOpacity
        style={styles.chatItem}
        onPress={() => navigate('ChatViewScreen', {title, id})}>
        <Avatar src={user.avatarUrl} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.label}>{description}</Text>
        </View>
        <View style={styles.navLabel}>
          <Text style={styles.label}>Yesterday</Text>
          <Icon style={styles.arrow} name="chevron-right" size={20} />
        </View>
      </TouchableOpacity>
    </Animated.View>
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
