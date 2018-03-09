import React, {Component} from 'react';
import {Image, ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import {Tile, List, ListItem, Button, Text} from 'react-native-elements';


class About extends Component {

    render() {

        return (
                <ImageBackground
                    style={s.backgroundImage}
                    source={require('../../assets/home/background.png')}>

                </ImageBackground>
        );
    }
}

const s = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%'
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
