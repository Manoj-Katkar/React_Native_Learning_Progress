/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';   //default one 

import AppTest from './components/AppTest';   //react-native inbuild components 

import AppStyle from './components/AppStyle';   // styling in react-native using StyleSheet API

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppStyle);


