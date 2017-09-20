import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export class MenuBar extends Component {
    constructor(props){
        super(props);
        const { navigate } = this.props.navigation;
    }

    render() {
        return(
            <View style={[styles.statusBar]}>
                <TouchableOpacity navigate={navigate} onPress={() => navigate('DrawerOpen')}>
                <Text style={[styles.menuFont]}>Menu</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statusBar: {
        height: 55,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#1162b2',
    },
    menuFont: {
        fontSize: 14,
        color: '#ffffff',
    },
});