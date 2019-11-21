import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';


import Header from './components/TodoComponents/Header';
import InputBar from './components/TodoComponents/InputBar';
import TaskItem from './components/TodoComponents/TodoItem'


export default class app extends React.Component {
  constructor (props) {
    super(props);

    this.state = { //adds objects to state
      taskInput: '',
      task: [
        { id: 0, 
          title: 'Take out the trash', done: false, 
          due: Date,  }],
      taskList: ''
    }
  }

  addNewTask () { //takes todoInput and unshift it to the front of the list
    let newTask = this.state.task;

    newTask.push ({
      id: newTask.length + 1,
      title: this.state.taskInput,
      done: false
    });

    this.setState({ 
      task: newTask,
      taskInput: '',
    });
    
  }
  toggleDone (item) { //toggling true false to set done.
    let toggleTask = [...this.state.task];

    toggleTask= toggleTask.map((task) => {
      if (task.id == item.id) {
        task.done = !task.done;
      }
      return task;

    })
    this.setState({task:toggleTask});
  }
  removeTask (item) {
    let removeTask = this.state.task;
    
    removeTask = removeTask.filter((task) => task.id !== item.id);
    
    this.setState({task:removeTask});
    
  }
  render () {
    return (
      <View style={styles.container}>
       <View style={styles.status_bar}>
       </View>
       <Header title="Clean Your Room" />
      
       <InputBar 
       addNewTask={() => this.addNewTask()}
       textChange={taskInput => this.setState({taskInput})} 
       taskInput={this.state.taskInput}
       />

      
       <FlatList 
       data={this.state.task}
       extraData={this.state}
       keyExtractor={(item, index) => index.toString()}
       renderItem={({item, index}) => {
        return (
          <TaskItem taskItem={item}
          
           toggleDone={ () => this.toggleDone(item)}
          
           removeTask={ () => this.removeTask(item)}/>
        );
       }}
        />
      </View>)

  } 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  status_bar: {
    height: 24,
    backgroundColor: "black",
  }
})
