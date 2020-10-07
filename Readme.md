# Instructions

First of all I'd like to welcome you to this workshop.
In this hands-on workshop we will get through almost the full lifecycle of creating Whatsapp-like app in React Native from prototyping phase to fully working app.

## Topics we will cover include:

- How React Native works under the hood
- Best practices of getting started with new React Native app.
- Overview of developer tools and debugging tips and tricks
- Core components in React Native
- Images and SVG Icons in React Native
- Styling your mobile app using flexbox with yoga layouting engine
- Building navigation workflows with react-navigation
- Different ways of adding Animations in React Native whether it's microinteractions or more complex behaviors
- GraphQL overview and how we can get started with GraphQL in our React Native **apps**
- Adding realtime capabilities to our app

This is a huge list of things that we will go through during workshop so before it starts we need to be sure all required software is installed so we can get to the point from the very beginning.

<details>
<summary>
Setup instructions before workshop
</summary>

## Remote workshop guidelines

Workshop will be taught using [Zoom](zoom.us) software. It's crucial that you download Zoom from official website.
https://zoom.us/download

We will use Zoom breakout rooms feature, which means that you will be splitted into groups during hands on part of the excercise and assigned into so-called "Breakout rooms".
In breakout room you are assigned to its crucial that you collaborate and share screen to ask guidelines. That's the best part of the remote workshop and it makes it even more interactive and engaging than in-person one.
I will go through every room to participate in discussions, help answering questions and so on.

I encourage you to keep video on at all times, so experience will be more human and social. I also encoruage you to use Mute feature if you are not talking to disable background noise.

## Having your Machine Ready - 3 Easy Steps

You'll be able to write React Native code for either iOS, Android, or both. Let's make sure your machine is ready to get rolling.

It's important that you are able to run a "Hello World" app **BEFORE** this workshop, even if you're not familiar with the steps.

We'll go over all the tools you've installed, but for now let's get you setup. If these steps seem rudimentary, then good! That's why
we want them out of the way before the workshop. If these tools are new to you, please spend some time familiarizing yourself
as we will mention but not go into detail on their exact use.

### 1. Git/GitHub source control

This part isn't critical, but we'll be occasionally pushing our code to a repo in the demo. If you would like to follow along
with those steps, be sure to have a [GitHub](https://github.com/) account and install Git for your OS.

Installing Git: https://www.atlassian.com/git/tutorials/install-git

### 2. React Native - using Native

There is a quick-start and there is a native code start. We'll be using the native-cli option. I will showcase also Expo option, but it's important you to get native-cli working before the workshop

The directions can be found here: https://reactnative.dev/docs/environment-setup

Please click the native tab and follow the steps provided.

> **React Native CLI Quickstart**

### 3. Hello World - Goodbye World?

Each of the directions above, ask you to generate "AwesomeProject" and run it. If you've done that you're ready for our workshop!

</details>

# Logistics

In this remote workshop setting, we will be using Zoom breakout rooms feauture.

### Starting your app

After cloning this repo, please run `npm install` to install all dependencies.

To run `iOS` app within simulator, use
`npx react-native run-ios`

For Android, use
`npx react-native run-android`

> To follow along with the workshop properly, there is an assumption that you've done prerequisite installations at home and have Hello World app running with react-native cli.

> I will answer questions for troubleshooting during the workshop, but to ensure consistent pace of the workshop, if you haven't done required installations beforehand, please refrain from asking installation questions.

<details>
<summary>Troubleshooting</summary>

If for some reason Android Build has failed, make sure you followed all steps at [https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup)

Potential fixes:

- Check that you don't have two JDKs in the system
- Check that you have `ANDROID_HOME` defined and in the Path

Potential fix for `SDK not found` (temp fix and a bad practice):

- Add `local.properties` file in `android` directory

Add `sdk.dir=/Users/username/Library/Android/sdk` under it making sure you substitute username with your username.

</details>

Slides for the whole workshop can be found [here](), but please make sure to follow along instead of jumping forward. If you've completed the step and wanna get bonus exercises, just ask.

<details>
    <summary>Exercise 1 - Components structure</summary>

- Install [flipper](https://github.com/facebook/flipper) for debugging
- run `npm install` in the repo after cloning it

- create `src` folder

- create `src/components/Compose.js` component

For this exercise it should return `View`

- create `src/components/Message.js` component

It should get message prop and render it

- create `src/components/ChatItem.js` component

It should get `title` and `description` prop and render them.

- create `src/components/Avatar.js` component

For this exercise it should just return empty `View`

- create `src/screens/Conversations.js` component
- That will contain `ChatItem` component that in future we will turn into chat coversations list.

Data shape will look like this. In next excercises we will get it from api.

```javascript
const chats = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    description: 'Hey there',
    user: {
      avatar: 'http://www.codetic.net/demo/templates/Privado/img/avatar.png',
    },
  },
];
```

- create `src/screens/ChatViewScreen.js` component

This component should have multiple `Message` components to render messages. Use the following mocked data:

```javascript
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
```

- Switch different screens in `App.js` by changing state (use `useState` hook for that)
- Add a `Button` to `App.js` and switch it's title conditionaly

</details>

After this exercise you will have component structure that we can use for future examples. If by the end of the exercise you have not completed everything, you can check out `step1` branch for solution.

<details>
<summary>
Excercise 2 - Layout and Flexbox
</summary>

Style screens to look like this:

![ConversationsScreen](https://vladjs-presentations.s3-us-west-2.amazonaws.com/EXC2.png)
![ConversationsScreen](https://vladjs-presentations.s3-us-west-2.amazonaws.com/EXC22.png)

![ChatViewScreen](https://vladjs-presentations.s3-us-west-2.amazonaws.com/EXC21.png)
![ChatViewScreen](https://vladjs-presentations.s3-us-west-2.amazonaws.com/EXC23.png)

## Resources

- Layout style props https://facebook.github.io/react-native/docs/layout-props.html
- Test style props https://facebook.github.io/react-native/docs/text.html

</details>

After this exercise we will have basic layout of all components. If by the end of the exercise you have not completed everything, you can check out `step2` branch for solution.

<details>
<summary>
Exercise 3 - Images and Icons
</summary>
Add more styling to the app to look like this:

![ConversationsScreen](https://vladjs-presentations.s3-us-west-2.amazonaws.com/EXC3.png)
![ConversationsScreen](https://vladjs-presentations.s3-us-west-2.amazonaws.com/EXC32.png)

![ChatViewScreen](https://vladjs-presentations.s3-us-west-2.amazonaws.com/EXC31.png)
![ChatViewScreen](https://vladjs-presentations.s3-us-west-2.amazonaws.com/EXC33.png)

- Add `ImageBackground` component to `ChatView` screen. Get image from the internet and load it locally by using `require` syntax.
- Create `Avatar` component and add it to `ChatItem` component.
- Use `FlatList` for rendering both list of conversations and messages
- Add `chevron-right` icon from `react-native-vector-icons/MaterialIcons`

> Make sure to install `react-native-vector-icons`

Vector Icons: https://github.com/oblador/react-native-vector-icons

after you install make sure on `iOS` to run `npx pod-install ios`

<details> 
    <summary>
    Installation instructions
    </summary>
Make sure to add to `Info.plist` the following:

```
<key>UIAppFonts</key>
	<array>
		<string>AntDesign.ttf</string>
		<string>Entypo.ttf</string>
		<string>EvilIcons.ttf</string>
		<string>Feather.ttf</string>
		<string>FontAwesome.ttf</string>
		<string>FontAwesome5_Brands.ttf</string>
		<string>FontAwesome5_Regular.ttf</string>
		<string>FontAwesome5_Solid.ttf</string>
		<string>Foundation.ttf</string>
		<string>Ionicons.ttf</string>
		<string>MaterialCommunityIcons.ttf</string>
		<string>MaterialIcons.ttf</string>
		<string>Octicons.ttf</string>
		<string>SimpleLineIcons.ttf</string>
		<string>Zocial.ttf</string>
	</array>
```

and for android to `app/build.gradle` the following:

`apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"`

</details>

If there are no network images on Android it means your emulator has no access to internet. Run emulator with:

```
emulator Pixel_3_API_28 -dns-server 8.8.8.8
```

</details>

After this exercise screens should look like this:

![ConversationsScreen](https://vladjs-presentations.s3-us-west-2.amazonaws.com/EXC4.png)
![ConversationsScreen](https://vladjs-presentations.s3-us-west-2.amazonaws.com/EXC42.png)

![ChatViewScreen](https://vladjs-presentations.s3-us-west-2.amazonaws.com/EXC41.png)
![ChatViewScreen](https://vladjs-presentations.s3-us-west-2.amazonaws.com/EXC43.png)

If you are not able to complete this section on time, checkout `step3` branch, run `npm install`, run `npx pod-install ios`. Make sure to restart metro bundler and rebuild the app

<details>
<summary>Exercise 4 - API, Input and Keyboard</summary>

- create `services/api.js` file where you will have mocked api calls.

```javascript
export const mockMessages = [
  {
    userId: 1,
    message: 'Hi Vladimir',
  },
  {
    userId: 2,
    message: 'Hi, John',
  },
  {
    userId: 1,
    message: 'When we will learn real data fetching?',
  },
  {
    userId: 2,
    message:
      "Let's get the basic first. We need to understand styling and handling inputs right? After all you want not only to receive but send messages too right?",
  },
];

export const chats = [
  {
    id: '123',
    title: 'Sophia Willis',
    description: 'Hey there',
    user: {
      avatarUrl: 'https://randomuser.me/api/portraits/women/43.jpg',
    },
    date: '8:30am',
  },
  {
    id: '234',
    title: 'Ken Wheeler',
    description: "What's up, Dude?",
    user: {
      avatarUrl: 'https://avatars2.githubusercontent.com/u/286616?s=460&v=4',
    },
    date: 'Yesterday',
  },
  {
    id: '123',
    title: 'John Doe',
    description: 'Hey there',
    user: {
      avatarUrl: 'https://randomuser.me/api/portraits/men/38.jpg',
    },
    date: 'Yesterday',
  },
  {
    id: '123',
    title: 'John',
    description: 'Hey there',
    user: {
      avatarUrl: 'https://randomuser.me/api/portraits/men/39.jpg',
    },
    date: 'Yesterday',
  },
  {
    id: '123',
    title: 'Zoey Barnes',
    description: "How's going?",
    user: {
      avatarUrl: 'https://randomuser.me/api/portraits/women/48.jpg',
    },
    date: '15/04/2018',
  },
];

export const getChats = () =>
  new Promise((resolve) => setTimeout(() => resolve(chats), 1000));

export const getMessagesById = (id) =>
  new Promise((resolve) => setTimeout(() => resolve(mockMessages), 1000));

export const postMessage = (message) =>
  mockMessages.push({
    userId: 1,
    message,
  });
```

- Use these calls to load chats and messages
- Write Compose component to post new messages using `postMessage` method from `services/api`. For input use [`TextInput` component](https://reactnative.dev/docs/textinput.html)
- When Keyboard is opened, use [`KeyboardAvoidingView`](https://reactnative.dev/docs/keyboardavoidingview.html) to make sure it's not covering the `TextInput`
- Dismiss Keyboard and empty the field when posting a new message

</details>

After this exercise we should have basic functionality of posting and viewing messages so in this exercise we will simulate API calls to get messages and conversations, focus on getting user text input and learn how to deal with software keyboard

<details>
<summary>
Exercise 5 - Navigation
</summary>

Install React-navigation by following https://reactnavigation.org/docs/getting-started

In a nutshell it's the following steps:
`npm install --save @react-navigation/native`
`npm install --save react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view`

- Remove Navigation buttons from the bottom of the screen
- Create Navigation from `ConversationScreen` to `ChatViewScreen` passing title of the conversation as a param.
- Display conversation title in the header on `ChatViewScreen` and load relevant messages for conversation based on id (it will matter for later stage exercises. Right now messages will be the same)
- Add left button on the left on `ChatViewScreen` with chevron left and `goBack` navigation

</details>

After this exercise You will have basic navigation workflow and we can start with Animations. If you are not able to finish this exercise on time, you can checkout `step5` branch, `npm install` `npx pod-install ios`

<details>
<summary>
Exercise 6 - Animations
</summary>

Take a look at the following video and implement
Animations using `Animated` API and `react-native-animatable`

https://www.youtube.com/watch?v=OmZfMNsvBQA

</details>

After this exercise you suppose to have you screen with animations as shown in the video. If you are not able to complete this exercise on time, then you can check out `step 6` branch in the repo, follow with `npm install`, `npx pod-install ios` and rebuild your project and restart. Make sure to stop the metro bundler beforehand.

<details>
<summary>
Exercise 7 - GraphQL
</summary>

Install Apollo GraphQL client by following this document:
https://www.apollographql.com/docs/react/get-started/

Configure your client for real-time capabilities like so:

```javascript
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {split} from 'apollo-link';
import {WebSocketLink} from 'apollo-link-ws';
import {getMainDefinition} from 'apollo-utilities';

// Create an http link:
const httpLink = new HttpLink({
  uri: 'endpoint url',
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://endpoint url`,
  options: {
    reconnect: true,
  },
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({query}) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const cache = new InMemoryCache();
const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,
});
```

- Now instead of having API calls, use `useQuery` hook to get conversations from the endpoint created during the workshop.

- Use `useMutation` to post message to this endpoint. Finally use `useSubscription` to get real-time data.
- Get rid of `api/services`

</details>
