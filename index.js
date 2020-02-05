/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// import Adapter from 'enzyme-adapter-react-16';
// Enzyme.configure({adapter: new Adapter()});

AppRegistry.registerComponent(appName, () => App);
