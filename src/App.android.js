/**
 * Created by root on 2017-07-13.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {


} from 'react-native';

import {StackNavigator} from 'react-navigation'

import Home from './view/home/HomeActivity';
import Launch from './view/home/LaunchActivity';
import Login from './view/user/LoginActivity';

const app=StackNavigator({
    Launch:{screen:Launch},
    Home:{screen:Home},
    Login:{screen:Login},
});


export default app