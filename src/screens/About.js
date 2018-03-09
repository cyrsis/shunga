import React, {Component} from 'react';
import {Image, ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import {Tile, List, ListItem, Button, Text} from 'react-native-elements';


const remote = 'https://s15.postimg.org/tw2qkvmcb/400px.png';

class About extends Component {

    render() {

        return (
            <View>
                <ImageBackground
                    style={s.backgroundImage}
                    source={require('../../assets/home/background.png')}>
                    `<Text>hiii</Text>`
                </ImageBackground>
            </View>
        );
    }
}

const s = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        position: 'absolute',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'red',
        opacity: 0.3
    }
});


export default About;
