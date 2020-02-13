import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axious from 'axios';

const TodoS=props=>(
    <tr>
        <td className= 'completed' >{props.todo.name}</td>
        <td>
            <Link to={"/edit/"+props.todo._id} >Edit</Link>
        </td>
    </tr>
)


export default class TodosSearchList extends Component {

    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.state={
            todos:[]
        }
    }

    handleChange(e) {
        // Variable to hold the original version of the list
    let currentList = [];
        // Variable to hold the filtered list before putting into state
    let newList = [];

        // If the search bar isn't empty
    if (e.target.value !== "") {
            // Assign the original list to currentList
      currentList = this.props.todos;

            // Use .filter() to determine which items should be displayed
            // based on the search terms
      newList = currentList.filter(item => {
                // change current item to lowercase
        const lc = item.toLowerCase();
                // change search term to lowercase
        const filter = e.target.value.toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
        return lc._id.includes(filter);
      });
    } else {
            // If the search bar is empty, set newList to original task list
      newList = this.props.todos;
    }
        // Set the filtered state based on what our rules added to newList
    this.setState({
        todos: newList
    });
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
            return  <TodoS todo={currentTodo} key={i} />
            
        })
    }
    render() {
        return (
            <div>
                <h3>Carers Search List data!</h3>
                <table className="table table-striped" style={{marginTop:25}}>
                    <thead>
                       
                    <tr>
                        <td> 
                        <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                        </td>
                    </tr>
                        <tr>
                            <th>Name </th>
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