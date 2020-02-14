import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import CreateSearchManuelTodo from "./components/create-search-todo.component";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <Link to="/" className="navbar-brand">App to get data from REST api</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Carers Data</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Carer</Link>
                </li>
                   <li className="navbar-item">
                  <Link to="/search-carer" className="nav-link">Search Carer by nino</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/search-carer" component={CreateSearchManuelTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
