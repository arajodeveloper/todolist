import React from 'react';

class AddTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        };
    }
    render() {
        return(
            <div className="inputbox">
                    <input id="addTodoInput" onChange={(e) => this.updateInput(e) } type="text"></input>
                    <button onClick={(e) => this.submitTodo(e)}>Add</button>
            </div>

        );
    }

    updateInput = (e) => {
        this.setState({ todo: e.target.value });

    }

    submitTodo = (e) => {
        e.preventDefault();
        this.props.addTodoFn(this.state.todo);
        document.getElementById('addTodoInput').value = '';

    }

}


export default AddTodo;