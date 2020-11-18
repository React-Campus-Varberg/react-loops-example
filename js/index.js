import React from 'react';
import ReactDOM from 'react-dom';

import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

/**
 1. När användaren lägger till en ny todo i AddTodo
 2. Skicka "upp" denna todo parent (App) och uppdatera state med
    den nya todo:n
 */

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            todos: [
                { todo: "Köp mjölk" },
                { todo: "Köp tidning" },
                { todo: "Köp kaffe" },
                { todo: "Brygg kaffe" },
            ],
            latestTodo: ''
        }

        //this tappar sin referens nedan och vi behöver binda this till funktionen addTodo
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(todo) {
        console.log('I addTodo: ', todo);  
        this.setState((prevState) => ({
            todos: prevState.todos.concat(todo)
        }));

        this.setState({ latestTodo: todo.todo })
    }

    render() {
        return (
            <article>
                <h1>{this.props.title}</h1>

                <ul className="todo-list">
                    { this.state.todos.map((todo, index) => {
                        return <TodoItem item={ todo.todo } key={ index } done="false" />
                    }) }
                </ul>

                <p>Senast tillagda: {this.state.latestTodo}</p>

                <AddTodo updateState={this.addTodo} />
            </article>
        )
    }
}


ReactDOM.render(<App title="Todo" />, document.getElementById('root'));