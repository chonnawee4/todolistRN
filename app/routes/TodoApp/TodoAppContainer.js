import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/todos'

import TodoApp from './TodoApp'
import styles from './styles'

class TodoAppContainer extends Component {

    _handleOnSubmit = (text) => {
        if (text) {
            this.props.dispatch(addTodo(text))
        }
    }

    render() {
        return (
            <View style={ styles.container }>
              <TodoApp onSubmit={ this._handleOnSubmit } todos={ this.props.todos } />
            </View>
        )
    }
}

const mapDispatchToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapDispatchToProps)(TodoAppContainer)