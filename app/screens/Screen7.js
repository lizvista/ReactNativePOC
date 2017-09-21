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
        const val = this.state.seconds;
        if(appState == 'background') {
            PushNotification.localNotificationSchedule({
                message: "My Push Notification",
                date: new Date(Date.now() + (val * 1000)).toISOString(),
            });
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        console.log(this.state.seconds);
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
                    >
                        <Picker.Item label="5" value={5}/>
                        <Picker.Item label="10" value={10}/>
                        <Picker.Item label="15" value={15}/>
                    </Picker>
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