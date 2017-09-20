import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Text,
  View,
  TouchableOpacity,
  Image,
  CameraRoll,
  ListView,
} from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';

export class Screen4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            urls: [],
        }
    }

    getPics = () => {
        CameraRoll.getPhotos({
            first: 4,
        })
        .then(r => this.setState({ photos: r.edges }))
    }

    convertToBase64 = () => {
        let urls = [];
        for (let photo of this.state.photos) {
            let path = photo.node.image.uri;
            console.log(path);
            RNFetchBlob.fs.readFile(path, 'base64')
            .then((data) => {
                let str = `data:image/jpg;base64,${data}`;
                urls.push(str);
                this.setState(urls);
            })
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.getPics();
        this.convertToBase64();
        console.log(this.state.urls);
        return(
            <View>
                <View style={[styles.statusBar]}>
                    <TouchableOpacity navigate={navigate} onPress={() => navigate('DrawerOpen')}>
                    <Text style={[styles.menuFont]}>Menu</Text>
                    </TouchableOpacity>
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