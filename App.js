/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './app/config/store'

import TodoApp from './app/routes/TodoApp'

var store = configureStore()

store.subscribe(() => {
    console.log(store.getState())
})

export default class App extends Component {
    render() {
        return (
            <Provider store={ store }>
              <View style={ styles.container }>
                <TodoApp/>
              </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop: 60
    }
});
