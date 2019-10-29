import React, { Component } from 'react';



class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            task: ''
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e =>{
        e.preventDefault();
        if(this.state.task !== ''){
            this.props.addTask(this.state.task);
            this.setState({task: ''})
            e.target.task.value = '';
        }else{
            alert('please add a task first');
        }
        
    }

    render() {
        return (
            <div className="task-form-wrapper">
                <h2>React Task Tracker</h2>
                <form className="task-form" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.task} name="task" placeholder="task to add" onChange={this.handleChanges} />
                    <button>Add Task</button>    
                </form>
                <button onClick={this.props.clearCompletedTasks}>Clear Completed Tasks</button>
            </div>
        );
    }
}
export default TodoForm;