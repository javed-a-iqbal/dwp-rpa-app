import React, { Component } from 'react';

import Axios from 'axios';

export default class CreateTodo extends Component {
    _isMounted = false;
    constructor(props){
        super(props)
        this.onChangeToDoNino=this.onChangeToDoNino.bind(this);
        this.onChangeToDoDiscription=this.onChangeToDoDiscription.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            nino:'',
            name:''
            }
    }
    onChangeToDoDiscription(e){
        this.setState({
           name:e.target.value 
        });
    }

    onChangeToDoNino(e){
        this.setState({
           nino:e.target.value 
        });
    }

    


    onSubmit(e){
        e.preventDefault();
        console.log('submitted');

        console.log(`Name  ${this.state.name}`);
        

        const newTodo={
            _id: this.state.nino,
            name: this.state.name
            
        }
        Axios.post('http://localhost:4000/carers/add', newTodo)
        .then(res=> console.log(res.data))

        this.setState({
            nino:'' , 
            name:'' ,         
        })
        this.props.history.push('/');

    }


    
    render() {
        return (
            <div style={{marginTop:20}}>
                <h3>Create Carers Component!!</h3>
                <form onSubmit={this.onSubmit}>
                    

                <div className="form-group">
                    <label>Nino: </label>
                    <input type="text"
                            className="form-control"
                            value={this.state.nino}
                            onChange={this.onChangeToDoNino} />
                    </div>

                    <div className="form-group">
                    <label>Name: </label>
                    <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeToDoDiscription} />
                    </div>
                                                        

                    <div className="form-group">
                    <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>


                </form>
            </div>
        )
    }
}