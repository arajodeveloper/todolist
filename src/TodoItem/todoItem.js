
import React from 'react';
import './style.css';

class TodoItem extends React.Component {
    render() {
        
        const { todo } = this.props;

        return(
            // 
        <div className="todobox" >
            <div className="row align-content-center h-100">
                <div className="col">
                 { todo.text }
                 <span id="trashcan" onClick={this.toggleTodo}><i className="fa fa-trash"></i></span>
                </div>
                
               
            </div>

        </div>
        );
    }

    toggleTodo = () => {
        this.props.updateTodoFn(this.props.todo);
    }

}


export default TodoItem;