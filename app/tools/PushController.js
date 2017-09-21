import React, { Component } from 'react';
import PushNotification from 'react-native-push-notification';

export default class PushController extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        PushNotification.configure({
            onNotification: (notification) => {
                console.log(notification);
            },
        });
    }

    render() {
        return null;
    }
}