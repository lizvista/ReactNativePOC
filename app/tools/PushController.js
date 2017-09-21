import React, { Component } from 'react';
import PushNotification from 'react-native-push-notification';

export default class PushCrontroller extends Component {
    componentDidMount() {
        PushNotification.configure({
            onNotification.configure({
                onNotification = (notification) => {
                    console.log('NOTIFICATION:', notification);
                },
            })
        });
    }

    render() {
        return null;
    }
}