import React from 'react';
import {
  FlatList,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
} from 'react-native';
import {Message, Compose} from '../components';
import ApplicationStyles from '../styles/appstyles';
import {HeaderHeightContext} from '@react-navigation/stack';
import {useSubscription, gql, useMutation} from '@apollo/client';

export const MY_USER = '563dd0b2-68d6-46bc-9009-21b448bb7fdb';

const GET_MESSAGES_BY_ID = gql`
  subscription getMessagesById($conversationId: uuid) {
    messages(where: {conversation_id: {_eq: $conversationId}}) {
      id
      message
      userId: user_id
    }
  }
`;

const POST_MESSAGE = gql`
  mutation postMessageForUserId(
    $userId: uuid
    $conversationId: uuid
    $message: String!
  ) {
    insert_messages(
      objects: {
        user_id: $userId
        conversation_id: $conversationId
        message: $message
      }
    ) {
      returning {
        message
      }
    }
  }
`;

export const ChatViewScreen = ({route}) => {
  const {id: conversationId} = route.params;
  const {loading, data, error} = useSubscription(GET_MESSAGES_BY_ID, {
    variables: {conversationId},
  });

  const [postMessage, {data: mutationData}] = useMutation(POST_MESSAGE);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text>{JSON.stringify(error)}</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/imgs/background.png')}
      style={styles.container}>
      <HeaderHeightContext.Consumer>
        {(headerHeight) => (
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={headerHeight}>
            <FlatList
              style={styles.container}
              data={data.messages}
              renderItem={({item, index}) => (
                <Message key={item.id} {...item} />
              )}
              keyExtractor={(item, index) => `message-${index}`}
            />
            <Compose
              submit={(message) =>
                postMessage({
                  variables: {
                    userId: MY_USER,
                    conversationId,
                    message,
                  },
                })
              }
            />
          </KeyboardAvoidingView>
        )}
      </HeaderHeightContext.Consumer>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ...ApplicationStyles,
});
