import React, { Component } from 'react'
import { ListView, View, Text } from 'react-native'

import styles from './styles'

export default class TodoListView extends Component {

    constructor(props) {
        super(props)

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.state = {
            dataSource: ds.cloneWithRows([])
        }
    }

    componentWillReceiveProps = (nextProps) => {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.setState({
            dataSource: ds.cloneWithRows(nextProps.todos)
        })
    }

    render() {
        return (
            <View style={ styles.container }>
              <ListView style={ styles.listView } dataSource={ this.state.dataSource } enableEmptySections={ true } renderRow={ (rowData) => <Text>
                                                                                                                                               { rowData.text }
                                                                                                                                             </Text> } />
            </View>
        )
    }
}