import React, { Component } from 'react'
import TodoForm from './TodoForm';
import TodoTask from './TodoTask';
import "./TodoApp.css";

class TodoApp extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            tasks: []
        }
        this.addTask = this.addTask.bind(this);
        this.modifyTask = this.modifyTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }
    addTask(task)
    {
        this.setState(st => ({ tasks: [...st.tasks, task] }))
    }
    modifyTask(task)
    {
        const newTasks = [...this.state.tasks]
        for (let t of this.state.tasks)
        {
            if (t.id === task.id)
            {
                newTasks.splice(this.state.tasks.indexOf(t), 1, task)
            }
        }
        this.setState(st => ({ tasks: newTasks }))
    }
    deleteTask(task)
    {
        const newTasks = [...this.state.tasks]
        for (let t of this.state.tasks)
        {
            if (t.id === task.id)
            {
                newTasks.splice(this.state.tasks.indexOf(t), 1)
            }
        }
        this.setState(st => ({ tasks: newTasks }))
    }
    render()
    {
        return (
            <div className='List'>
                <div className='Part'>
                    <div className='Title'>Todo List</div>
                    <div className='Subtitle'>React exercise list app</div>
                    <div className='Line'></div>
                </div>
                <div className='Content'>
                    {this.state.tasks.map(t => 
                    {
                        return <TodoTask deleteTask={this.deleteTask} modifyTask={this.modifyTask} id={t.id} key={t.id} text={t.text} />
                    })}
                </div>
                <div className='Part'>
                    <div className='Subtitle'>Create Task</div>
                    <TodoForm addTask={this.addTask} />
                </div>
            </div>
        )
    }
}

export default TodoApp;