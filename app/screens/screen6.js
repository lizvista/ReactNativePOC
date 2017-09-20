import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    ListView,
} from 'react-native';
import Contacts from 'react-native-contacts';

export class Screen6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        }
    }

    getContacts = () => {
        Contacts.getAll((err, contacts) => {
            if(err === 'denied') {
                console.log('denied');
            } else {
                this.setState({contacts});
            }
        })
    }

    componentWillMount = () => {
        this.getContacts();
    }

    render() {
        const { navigate } = this.props.navigation;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const contacts = this.state.contacts;
        console.log(contacts);
        return(
            <View>
                <View style={[styles.statusBar]}>
                    <TouchableOpacity navigate={navigate} onPress={() => navigate('DrawerOpen')}>
                    <Text style={[styles.menuFont]}>Menu</Text>
                    </TouchableOpacity>
                </View>
                <ListView
                style={[styles.list]}
                dataSource={ds.cloneWithRows(contacts)}
                renderRow={(data) => <Text style={[styles.contactText]}>{data.givenName} {data.familyName}{'\n'}{data.phoneNumbers[0].number}{'\n'}</Text>}
                />
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
    list: {
        margin: 50,
    },
    contactText: {
        fontSize: 18,
    },
});