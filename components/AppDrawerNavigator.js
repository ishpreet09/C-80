import * as React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {View} from 'react-native';
import TabNavigator from './TabNavigator';
import CustomSideBarMenu from './customSideBarMenu';

export const AppDrawerNavigator =createDrawerNavigator({
    Home:{screen:TabNavigator}
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:"Home"
}
)
