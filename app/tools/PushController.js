import React, { Component } from 'react';
import PushNotification from 'react-native-push-notification';

export default class PushCrontroller extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        PushNotification.configure({
            onNotification: function(notification) {
                console.log(notification);
            },
        });
    }

    render() {
        return null;
    }
}