
  
import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      taskList: [
        {
          task: 'Dummy Task 1',
          id: 908213092183,
          completed: false
        },
        {
          task: 'Dummy Task 2',
          id: 392840932840923,
          completed: false
        }
      ]
    }
  }

  componentDidMount(){
    let localTasks = localStorage.getItem('localTasks');

    if(localTasks){
      localTasks = JSON.parse(localTasks);
      // let loadedTasks = Object.values(localTasks);
      console.log(localTasks);

      this.setState({
        taskList: localTasks
      })
    }
  }

  componentDidUpdate(){
    localStorage.setItem('localTasks', JSON.stringify(this.state.taskList));
  }

  toggleTask = id =>{
    console.log(`App.js - toggleTask: ${id}`);
    this.setState({
      taskList: this.state.taskList.map(task =>{
        if(task.id === id){
          return {...task, completed: !task.completed};
        }else{
          return task;
        }
      })
    })
  };

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      taskList: [...this.state.taskList, newTask]
    });

    console.log(`App.js - addTask [${newTask.task}]`);
  };

  clearCompletedTasks = () =>{
    this.setState({
      taskList: this.state.taskList.filter(task => !task.completed)
    });
  };

  render() {
    return (
      <div className="react-task-tracker">
        <TodoForm addTask={this.addTask} clearCompletedTasks={this.clearCompletedTasks}/>
        <TodoList taskList={this.state.taskList} toggleTask={this.toggleTask}/>
      </div>
    );
  }
}

export default App;