import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import { Screen1 } from './app/screens/screen1.js';
//import { Screen3 } from './app/screens/screen3.js';
//import { Screen4 } from './app/screens/screen4.js';
//import { Screen5 } from './app/screens/screen5.js';

const ReactNativePOC = DrawerNavigator ({
    Home: {
        screen: Screen1,
    },
    /*Bluetooth: {
        screen: Screen3,
    },
    CameraRoll: {
        screen: Screen4,
    },
    Camera: {
        screen: Screen5,
    },*/
});

AppRegistry.registerComponent('ReactNativePOC', () => ReactNativePOC);
