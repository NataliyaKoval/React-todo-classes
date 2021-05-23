import React, {Component} from 'react';

import Todo from './todo';
import AddTodo from './addtodo';

class Todos extends Component {

    state = {
        addTodoValue: "",
        todos: [
            {
                id: 1,
                value: "Read 15 pages",
                isDone: false
            },
            {
                id: 2,
                value: "Watch 2 videos about css",
                isDone: true
            },
            {
                id: 3,
                value: "Take course on Udemy",
                isDone: false
            }
        ]
    }

    getTime() {
        let d = new Date();
        let n = d.getTime();
        return n;
    }

    //method called from Todo component
    handleDelete = todo => {
        const todos = this.state.todos.filter((t) => {
            return t.id !== todo
        });
        this.setState({todos});
    }

    handleDone = todo => {
        const todos = [...this.state.todos];
        todos.map((t) => {
            if (t.id === todo.id) {
                t.isDone = !t.isDone;
            }
            return t;
        });
        this.setState({todos});
    }

    //method called from AddTodo component
    addNewTodo = value => {
        if (value) {
            const todos = [...this.state.todos];
            todos.push(
                {
                    id: this.getTime(),
                    value: value,
                    isDone: false
                }
            );
            this.setState({addTodoValue: "", todos})
        } else {
            console.log("Please Add Todo Text");
        }
    }

    render() {
        return (
            <table className="table">
                <tbody>
                {this.state.todos.map((todo, index) => (
                    <tr key={todo.id}>
                        <Todo index={index + 1} todo={todo} fooDelete={this.handleDelete}
                              fooDoneDone={this.handleDone}/>
                    </tr>
                ))}
                <tr>
                    <td colSpan="4" className="text-center">
                        <AddTodo fooAddTodo={this.addNewTodo} addTodoValue={this.state.addTodoValue}/>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default Todos;
