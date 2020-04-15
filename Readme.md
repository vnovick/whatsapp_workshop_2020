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
-  Different ways of adding Animations in React Native whether it's microinteractions or more complex behaviors
-  GraphQL overview and how we can get started with GraphQL in our React Native **apps**
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

You'll be able to write React Native code for either iOS, Android, or both.  Let's make sure your machine is ready to get rolling.

It's important that you are able to run a "Hello World" app **BEFORE** this workshop, even if you're not familiar with the steps.

We'll go over all the tools you've installed, but for now let's get you setup.  If these steps seem rudimentary, then good!  That's why
we want them out of the way before the workshop.  If these tools are new to you, please spend some time familiarizing yourself
as we will mention but not go into detail on their exact use.

### 1. Git/GitHub source control
This part isn't critical, but we'll be occasionally pushing our code to a repo in the demo.  If you would like to follow along
with those steps, be sure to have a [GitHub](https://github.com/) account and install Git for your OS.

Installing Git:  https://www.atlassian.com/git/tutorials/install-git

### 2. React Native - using Native

There is a quick-start and there is a native code start.  We'll be using the native-cli option. I will showcase also Expo option, but it's important you to get native-cli working before the workshop

The directions can be found here:  https://reactnative.dev/docs/environment-setup

Please click the native tab and follow the steps provided. 

> **React Native CLI Quickstart**


### 3. Hello World - Goodbye World?
Each of the directions above, ask you to generate "AwesomeProject" and run it.  If you've done that you're ready for our workshop!

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
    <summary>Exercise 1</summary>

  - Install [flipper](https://github.com/facebook/flipper) for debugging
  - run `npm install` in the repo after cloning it

- create `src` folder

- create `src/screens/Conversations.js` component
That will contain a `View` with `Text` component that in future we will turn into chat coversations list. 

Data shape will look like this. In next excercises we will get it from api.

```javascript
const chats = [{
    id: 1,
    title: 'Lorem Ipsum',
    description: 'Hey there',
    user: {
        avatar: 'http://www.codetic.net/demo/templates/Privado/img/avatar.png'
    }
}]
```

- create `src/screens/ChatViewScreen.js` component

This component should have multiple `Text` components to render messages. Use the following mocked data:

```javascript
const messages = [{
    id: 1,
    userId: 1
    message: 'Lorem Ipsum'
},{
    id: 2,
    userId: 2,
    message: 'Lorem Ipsum 2'
}]
```

- create `src/components/Compose.js` component

For this exercise it should return `View` and `Text`

- create `src/components/Message.js` component

Use this component to render chat message in `ChatViewScreen`

- create `src/components/ChatItem.js` component

Use this component to render conversation item on `Conversations` screen.

- create `src/components/Avatar.js` component 

For this exercise it should just return empty `View` 

- Switch different screens in `App.js` by changing state (use `useState` hook for that)


</details>

After this exercise you will have component structure that we can use for future examples. If by the end of the exercise you have not completed everything, you can check out `step1` branch for solution.

