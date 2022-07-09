import React, { Component } from 'react'
import './TodoTask.css'
class TodoTask extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            text: this.props.text,
            id: this.props.id,
            inEdit: false,
            decoration: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onType = this.onType.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.addDecoration = this.addDecoration.bind(this);
    }
    onType(e)
    {
        let text = e.target.value;
        this.setState({ text: text })
    }
    onSubmit(e)
    {
        let task = { text: this.state.text, id: this.state.id };
        e.preventDefault();
        this.props.modifyTask(task);
        this.setState(st => ({ text: st.text }))
        this.setState({ inEdit: false })
    }
    toggleEdit()
    {
        this.setState(st => ({ inEdit: !st.inEdit }))

    }
    onDelete()
    {
        let task = { text: this.state.text, id: this.state.id };
        this.props.deleteTask(task)
    }
    addDecoration()
    {
        this.setState(st => ({ decoration: !st.decoration }))
    }
    render()
    {
        return (
            <div className='Task'>
                <div className='Text'>
                    {this.state.inEdit
                        ?
                        <form onSubmit={this.onSubmit}>
                            <input
                                className='EditTxt'
                                name='text'
                                id='text'
                                type="text"
                                placeholder='New Task'
                                value={this.state.text}
                                onChange={this.onType}
                            />
                        </form>
                        :
                        <div onClick={this.addDecoration} style={this.state.decoration ? { textDecoration: "line-through" } : { textDecoration: "none" }}>{this.props.text}</div>
                    }
                </div>
                <div className='Btns'>
                    {this.state.inEdit ||
                        <button className='Icon' onClick={this.toggleEdit} style={{transform: "rotate(-45deg) scaleX(-1)"}}>✏</button>
                    }
                    {!this.state.inEdit ||
                        <button className='Icon' onClick={this.onSubmit}>✔️</button>
                    }
                    <button className='Icon' onClick={this.onDelete}>🗑</button>
                </div>

            </div >
        )
    }
}
export default TodoTask;