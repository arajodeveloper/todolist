import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './TodoList/todoList';
import AddTodo from './AddTodo/addTodo';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos:[]
      
    };
  }

  render(){
    return(
      <div className="row justify-content-center">
        <div className="col-1"></div>
        <div className="col-10 center-text prettyBox" align="center">
          <AddTodo addTodoFn={this.addTodo}></AddTodo>
          <TodoList updateTodoFn={this.updateTodo} todos={this.state.todos}></TodoList>
        </div>
        <div className="col-1"></div>
      </div>

        
    );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if(todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({todos:savedTodos});

    } else {

    }

  }

  addTodo = async (todo) => {
    await this.setState({todos: [...this.state.todos, { text: todo,
    completed: false
  }] });
    localStorage.setItem('todos',JSON.stringify(this.state.todos))

  }

  updateTodo = async(todo) => {
    const newTodos = this.state.todos.filter(_todo => {
      return todo !== _todo
    });
    await this.setState({ todos: newTodos });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

}

export default App;
