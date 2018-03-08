import React, {Component} from 'react';
import {Image, ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import {Tile, List, ListItem, Button, Text} from 'react-native-elements';
import {me} from '../config/data';

const remote = 'https://s15.postimg.org/tw2qkvmcb/400px.png';

class Explore extends Component {
    handleSettingsPress = () => {
        this.props.navigation.navigate('Settings');
    };

    render() {
        const resizeMode = 'center';
        const text = 'This is some text inlaid in an <iamge>';
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#eee',
                }}
            >
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Image
                        style={{
                            flex: 1,
                            resizeMode,
                        }}
                        source={{uri: remote}}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 40,
                        }}
                    >
                        {text}
                    </Text>
                </View>
            </View>
        );
    }
}

const s = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
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


export default Explore;
