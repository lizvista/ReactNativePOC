import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Camera from 'react-native-camera';

export  class Screen5 extends Component {
  takePicture() {
    const options = {};
    this.camera.capture({metadata: options})
    .then((data) => console.log(data))
    .catch(err => console.log(err));
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={[styles.statusBar]}>
          <TouchableOpacity navigate={navigate} onPress={() => navigate('DrawerOpen')}>
          <Text style={[styles.menuFont]}>Menu</Text>
          </TouchableOpacity>
        </View>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <TouchableOpacity onPress={this.takePicture.bind(this)}>
            <Image source={require('../images/capture.png')}/>
          </TouchableOpacity>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  },
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
captureBar: {
  backgroundColor: '#ffffff',
  flexDirection: 'row',
  justifyContent: 'center',
  margin: 20,
},
});
