import React from 'react';
import {StyleSheet, Text, Button, TouchableOpacity,} from 'react-native'

export default class TaskItem extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        const taskItem = this.props.taskItem;

        return (
            <TouchableOpacity style={styles.taskItem}
            onPress={() => this.props.toggleDone()}
            >
                <Text style={(taskItem.done) ? { color: '#AAAAAA' } : {color: '#313131'}}>
                    { taskItem.title }
                </Text>

                <Button
                    title="Remove"
                    color={(taskItem.done) ?  'rgba(200, 0, 0, 0.5)'  :  'rgba(255, 0, 0, 1)'}
                    onPress={() => this.props.removeTask()}
                />

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    taskItem: {
        width: '100%',
        height: 40,
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15
    },
})