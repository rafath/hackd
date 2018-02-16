import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import { truncate } from '../helpers/utils';
import Posts from '../screens/Posts';
import Post from '../screens/Post';
import Settings from '../screens/Settings';
import Account from '../screens/Account';
import Search from '../screens/Search';
import Saved from '../screens/Auth/Saved';
import CommentThemes from '../screens/Settings/CommentThemes';
import Submit from '../screens/Submit';

const PostStack = StackNavigator({
  Posts: {
    screen: Posts,
  },
  Post: {
    screen: Post,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.descendants > -1 
             ? `${navigation.state.params.descendants} comments` 
             : truncate(navigation.state.params.title, 20),
    }),
  },
});

const AccountStack = StackNavigator({
  Account: {
    screen: Account,
    navigationOptions: {
      title: 'Account',
    },
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      title: 'Saved',
    },
  },
  Post: {
    screen: Post,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.descendants > -1 
             ? `${navigation.state.params.descendants} comments` 
             : truncate(navigation.state.params.title, 20),
    }),
  },
});

const SubmitStack = StackNavigator({
  Submit: {
    screen: Submit,
    navigationOptions: {
      title: 'Submit',
    },
  },
});

const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
  CommentThemes: {
    screen: CommentThemes,
    navigationOptions: {
      title: 'Comment Themes',
    },
  },
});

const SearchStack = StackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Search',
    },
  },
});

export const Hackd = TabNavigator({
  Posts: {
    screen: PostStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../img/feed.png')}
          style={[styles.icon, { tintColor }]}
        />
      ),
    },
  },
  Account: {
    screen: AccountStack,
    navigationOptions: {
      tabBarLabel: 'Account',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../img/account.png')}
          style={[styles.icon, { tintColor }]}
        />
      ),
    },
  },
  Submit: {
    screen: SubmitStack,
    navigationOptions: {
      tabBarLabel: 'Submit',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../img/submit.png')}
          style={[styles.icon, { tintColor }]}
        />
      ),
    },
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../img/search.png')}
          style={[styles.icon, { tintColor }]}
        />
      ),
    },
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../img/settings.png')}
          style={[styles.icon, { tintColor }]}
        />
      ),
    },
  },
}, {
  tabBarOptions: {
    // showLabel: false,
    style: {
      // backgroundColor: '#FFFFFF',
    },
  },
});

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
