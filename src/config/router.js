import React from 'react';
import {TabNavigator, StackNavigator,TabBarBottom} from 'react-navigation';
import {Icon} from 'react-native-elements';

import Feed from '../screens/Feed';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';

export const FeedStack = StackNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: {
            title: 'About',
        },
    },
    Details: {
        screen: UserDetail,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
        }),
    },
});

export const Tabs = TabNavigator({
    Feed: {
        screen: FeedStack,
        navigationOptions: {
            tabBarLabel: 'About',
            tabBarIcon: ({tintColor}) => <Icon name="list" size={35} color={tintColor}/>,
        },
    },
    Me: {
        screen: Me,
        navigationOptions: {
            tabBarLabel: 'Artists',
            tabBarIcon: ({tintColor}) => <Icon name="account-circle" size={35} color={tintColor}/>
        },
    },
    Me3: {
        screen: Me,
        navigationOptions: {
            tabBarLabel: 'History',
            tabBarIcon: ({tintColor}) => <Icon name="account-circle" size={35} color={tintColor}/>
        },
    },
    Me4: {
        screen: Me,
        navigationOptions: {
            tabBarLabel: 'keywords',
            tabBarIcon: ({tintColor}) => <Icon name="account-circle" size={35} color={tintColor}/>
        },
    },
    Me2: {
        screen: Me,
        navigationOptions: {
            tabBarLabel: 'Credits',
            tabBarIcon: ({tintColor}) => <Icon name="account-circle" size={35} color={tintColor}/>
        },
    },
   }, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',

});

export const SettingsStack = StackNavigator({
    Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Settings',
        },
    },
});

export const Root = StackNavigator({
    Tabs: {
        screen: Tabs,
    },
    Settings: {
        screen: SettingsStack,
    },
}, {
    mode: 'modal',
    headerMode: 'none',
});