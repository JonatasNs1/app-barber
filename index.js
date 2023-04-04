/**
 * @format
 */

// cuida dos gestos que eu vou fazer
import 'react-native-gesture-handler';

import { AppRegistry } from "react-native";
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName,() => App);