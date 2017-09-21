import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import { Screen1 } from './app/screens/Screen1.js';
import { Screen3 } from './app/screens/Screen3.js';
import { Screen4 } from './app/screens/Screen4.js';
import { Screen5 } from './app/screens/Screen5.js';
import { Screen6 } from './app/screens/Screen6.js';
import { Screen7 } from './app/screens/Screen7.js';

//console.disableYellowBox = true;

const ReactNativePOC = DrawerNavigator ({
    Home: {
        screen: Screen1,
    },
    Bluetooth: {
        screen: Screen3,
    },
    Photos: {
        screen: Screen4,
    },
    Camera: {
        screen: Screen5,
    },
    Contacts: {
        screen: Screen6,
    },
    Notification: {
        screen: Screen7,
    },
});

AppRegistry.registerComponent('ReactNativePOC', () => ReactNativePOC);
