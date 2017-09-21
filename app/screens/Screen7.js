import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Picker,
    AppState,
} from 'react-native';
import PushController from '../tools/PushController.js';
import PushNotification from 'react-native-push-notification';

export class Screen7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 5,
        };
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentWillMount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }

    handleAppStateChange(appState) {
        if(appState == 'background') {
            PushNotification.localNotificationSchedule({
                message: "My Push Notification",
                date: new Date(Date.now() + (this.state.seconds * 1000)).toISOString(),
            });
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View>
                <View style={[styles.statusBar]}>
                    <TouchableOpacity navigate={navigate} onPress={() => navigate('DrawerOpen')}>
                    <Text style={[styles.menuFont]}>Menu</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text>Choose your notification time in seconds</Text>
                    <Picker
                    style={[styles.picker]}
                    selectedValue={this.state.seconds}
                    onValueChange={(seconds) => this.setState({seconds})}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statusBar: {
        height: 55,
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#1162b2',
    },
    menuFont: {
        fontSize: 14,
        color: '#ffffff',
    },
    picker: {
        width: 100,
    },
});