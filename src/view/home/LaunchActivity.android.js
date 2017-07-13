//import liraries
import React, {Component} from 'react';
import {
    View, Text, StyleSheet,
    TouchableHighlight,
    Image,
    ToastAndroid,
} from 'react-native';


import NetUtils from '../../utils/NetUtils';

import {StackNavigator} from 'react-navigation'

// create a component
class Launch extends Component {

    constructor(props) {
        super(props);
    }


    static navigationOptions = {
        header: null,
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <TouchableHighlight onPress={
                () => {
                    ToastAndroid.show("toazhuan",ToastAndroid.SHORT);
                    navigate('Home')
                }
            }>
                <View style={styles.container}>
                    <Image source={require('../../images/refresh_failed.png')}/>
                    <Text>Launch 开始</Text>
                </View>
            </TouchableHighlight>


        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Launch;
