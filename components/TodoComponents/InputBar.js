import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';




const InputBar = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input} //text input is altered on change and added to state var todoInput
            onChangeText={(taskInput) => props.textChange(taskInput)} 
            value={props.taskInput} />
            <TouchableOpacity style={styles.addButton}
            onPress={props.addNewTask}
            >
                <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
  inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      shadowOffset: { width: 0, height: 3}, 
      shadowColor: '#171717',
      shadowOpacity: .1
  },
  input: {
     backgroundColor: "#f3f3f3",
     flex: 1,
     fontSize: 18,
     height: 35,
  },
  addButton: {
    width: 100,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#171717',
    fontSize: 18,
    fontWeight: '700',
  } 
})

export default InputBar;