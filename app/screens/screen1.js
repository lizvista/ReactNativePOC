import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export class Screen1 extends Component {
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
                    <Image source={require('../images/hersheys.png')}/>
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
});