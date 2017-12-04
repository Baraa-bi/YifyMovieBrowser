import React, { Component } from 'react';
import { I18nManager, Linking, BackHandler } from 'react-native';
import Movies from './screens/Movies';
import {
  DrawerNavigator,
  StackNavigator,
  TabNavigator,
  addNavigationHelpers,
  NavigationActions,
  DrawerItems
} from 'react-navigation';


export default class Router extends Component {

  render (){
    const Drawer = DrawerNavigator(
      {
        movies: { screen: Movies },
      }
    );
    return <Drawer/>
  }

}

