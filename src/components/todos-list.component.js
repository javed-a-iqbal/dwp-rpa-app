import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axious from 'axios';

const Todo=props=>(
    <tr>
        <td className= 'completed' >{props.todo.name}</td>
        <td>
            <Link to={"/edit/"+props.todo._id} >Edit</Link>
        </td>
    </tr>
)

export default class TodosList extends Component {

    constructor(props){
        super(props);
        this.state={
            todos:[]
        }
    }

    componentDidMount(){
        axious.get('http://localhost:4000/carers')
                .then(respose => {
                    this.setState({
                        todos:respose.data
                    });
                })
                .catch(function(error){
                        console.log(error);
                });
    }

    componentDidUpdate(){
        axious.get('http://localhost:4000/carers/')
        .then(respose => {
            this.setState({
                todos:respose.data
            });
        })
        .catch(function(error){
                console.log(error);
        });
    }

    todoList(){
        return this.state.todos.map(function(currentTodo,i){
            return <Todo todo={currentTodo} key={i} />
        })
    }
    render() {
        return (
            <div>
                <h3>Carers List data!</h3>
                <table className="table table-striped" style={{marginTop:25}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>

                </table>
            </div>
        )
    }
}