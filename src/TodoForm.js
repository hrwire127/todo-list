import React, { Component } from 'react'
import './TodoForm.css'
import { v4 as uuidv4 } from 'uuid';

class TodoForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            text: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onType = this.onType.bind(this);
    }
    onType(e)
    {
        let text = e.target.value;
        this.setState({ text: text })
    }
    onSubmit(e)
    {
        e.preventDefault();
        this.props.addTask({ text: this.state.text, id: uuidv4() });
        this.setState({ text: "" })
    }
render()
{
    return (
        <div>
            <form onSubmit={this.onSubmit}>
                <input 
                    className='Input'
                    name='text'
                    id='text'
                    type="text"
                    placeholder='New Task'
                    value={this.state.text}
                    onChange={this.onType}
                />
                <button className='Btn'>Add</button>
            </form>
        </div>
    )
}
}

export default TodoForm;