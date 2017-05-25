import React, { Component } from 'react'
import { View } from 'react-native'

import InputBox from '../../components/InputBox'
import TodoListView from '../../components/TodoListView'
import { addTodo } from '../../actions/todos'

import styles from './styles'

export default class TodoApp extends Component {

    _handleSubmit = (text) => {
        this.props.onSubmit(text)
    }

    render() {
        return (
            <View style={ styles.container }>
              <InputBox onPress={ this._handleSubmit } />
              <TodoListView todos={ this.props.todos } />
            </View>
        )
    }
}