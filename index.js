/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Container } from './src/naviagation/index';

import * as firebase from 'firebase';

 config = {
    apiKey: "AIzaSyC36MsoCq_Ef8q5X361HmSgtws10dmefCg",
    authDomain: "graduationpoject-38b49.firebaseapp.com",
    databaseURL: "https://graduationpoject-38b49.firebaseio.com",
    projectId: "graduationpoject-38b49",
    storageBucket: "graduationpoject-38b49.appspot.com",
    messagingSenderId: "919023476235"
  };
  firebase.initializeApp(config);

AppRegistry.registerComponent(appName, () => Container);
