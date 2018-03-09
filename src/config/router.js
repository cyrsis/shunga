import React from 'react';
import {TabNavigator, StackNavigator,TabBarBottom} from 'react-navigation';
import {Icon} from 'react-native-elements';

import Feed from '../screens/Feed';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';
import Explore from "../screens/Explore";
import LocationMap from "../screens/Map";
import DeckScreen from "../screens/DeckScreen";
import About from "../screens/About";

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
const tabOptions ={
    Feed: {
        screen: About,
        navigationOptions: {
            tabBarLabel: 'About',
            tabBarIcon: ({tintColor}) => <Icon name="list" size={35} color={tintColor}/>,
        },
    },
    Me: {
        screen: Explore,
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
        screen: DeckScreen,
        navigationOptions: {
            tabBarLabel: 'keywords',
            tabBarIcon: ({tintColor}) => <Icon name="account-circle" size={35} color={tintColor}/>
        },
    },
    Me2: {
        screen: LocationMap,
        navigationOptions: {
            tabBarLabel: 'Credit',
            tabBarIcon: ({tintColor}) => <Icon name="account-circle" size={35} color={tintColor}/>
        },
    }
}
export const Tabs = TabNavigator(tabOptions,{
    animationEnabled: false,
    swipeEnabled: false,
    lazyLoad: true,
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    indicatorStyle: {
        backgroundColor: 'transparent'
    },
    style: {
        backgroundColor: 'rgba(22, 22, 22, 0.3)',
        borderTopWidth: 3,
        borderTopColor: '#996600',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    }

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