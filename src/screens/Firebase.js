import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import * as firebase from 'firebase'; // 4.3.1

// *** 1. ADD YOUR FIREBASE CREDENTIALS
// - Go to firebase
// - Sign in to your Google account, go to Console
// - Add a new project
// - When you see "Welcome to Firebase! Get started here." click "Add Firebase to your web app"
// - You will see a modal that contains the config data for your app. Copy and paste it in
//   on top of the config below.

const config = {
    apiKey: 'AIzaSyCOsaB6-a0GwYtVnTy1dhwdzij3BgHhMrk',
    authDomain: 'fir-expo-firebase.firebaseapp.com',
    databaseURL: 'https://fir-expo-firebase.firebaseio.com',
    projectId: 'fir-expo-firebase',
    storageBucket: 'fir-expo-firebase.appspot.com',
    messagingSenderId: '706774196990',
};

try {
    firebase.initializeApp(config);
} catch (e) {
    console.log('App reloaded, so firebase did not re-initialize');
}

// *** 2. UPDATE FIREBASE RULES
// - Configure the rules for your database like in this screenshot: http://url.brentvatne.ca/t4H6md.png
// - Note that this makes it so authentication is not required to make changes. Of course this makes
//   not much sense for a real app, but for a hackathon, this doesn't matter -- it makes you faster.
// - When you're done, run the app, then delete all of these silly comments.
// - You can read more about Firebase integration with authentication, *if you care*, here:
//   https://docs.expo.io/versions/latest/guides/using-firebase.html

// *** Troubleshooting
// - Value stuck at zero? Double check that you set the rules correctly!

export default class Firebase extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CounterContainer />
            </View>
        );
    }
}

class CounterContainer extends Component {
    state = {
        count: null,
    };

    componentWillMount() {
        firebase.database().ref('counter').on('value', snapshot => {
            let count = snapshot.val().count;
            this.setState({ count });
        });
    }

    render() {
        return <Counter count={this.state.count} />;
    }
}

class Counter extends Component {
    render() {
        let { count } = this.props;

        return (
            <View>
                <Text style={styles.counterText}>
                    Current count: {count === null ? 'Zero' : count}
                </Text>
                <Button title="Add one" onPress={this._increaseCount} />
            </View>
        );
    }

    _increaseCount = () => {
        firebase.database().ref('counter').set({
            count: (this.props.count || 0) + 1,
        });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    counterText: {
        fontSize: 20,
        marginBottom: 10,
    },
});
