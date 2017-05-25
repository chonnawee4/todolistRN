import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

import styles from './styles'

export default class InputBox extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }
    }

    _handleOnPress = () => {
        this.props.onPress(this.state.text)
        this.setState({
            text: ''
        })
    }

    _handleChangeText = (text) => {
        this.setState({
            text
        })
    }

    render() {
        return (
            <View style={ styles.container }>
              <TextInput style={ styles.inputText } placeholder='Add todo' onChangeText={ this._handleChangeText } value={ this.state.text } />
              <Button title='Submit' onPress={ this._handleOnPress } />
            </View>
        )
    }
}