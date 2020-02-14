import React, { Component } from 'react';
import axious from 'axios';

export default class EditTodo extends Component {
    constructor(props){
        super(props)
        this.onChangeTodoDescription=this.onChangeTodoDescription.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
       
        this.state={
            name:''
           

        }
    }

    componentDidMount(){

      axious.get('http://localhost:4000/carers/'+this.props.match.params.id) 
            .then(response => {
                this.setState({
                    name:response.data.name
                    
                });
                console.log(this.state.name);
            })
            .catch(function(error){
                console.log(error);
            });
    }

    // componentDidUpdate(){
    //     axious.get('http://localhost:4000/todos/'+this.props.match.params.id) 
    //     .then(response => {
    //         this.setState({
    //             todo_description:response.data.todo_description,
    //             todo_responsible:response.data.todo_responsible,
    //             todo_priority:response.data.todo_priority,
    //             todo_completed:response.data.todo_completed
                
    //         });
    //         console.log(this.state.todo_description);
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     });  
    // }

    onChangeTodoDescription(e){
        this.setState({
            name:e.target.value  
        })
    }
    
     
    
   
    onSubmit(e){
        e.preventDefault();
        const obj={
            name:this.state.name
        };

        axious.post('http://localhost:4000/carers/update/'+ this.props.match.params.id,obj)
                .then(res=>{
                    console.log(res.data);
                });
                this.props.history.push('/');


    }

    render() {
        return (
            <div>
                <h3>Edit carer</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>Name:</label>
                    <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeTodoDescription}
                            />
                      
                        <br/>
                        <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary"/>
                        </div>
                    </div>
                    
                </form>

            </div>
        )
    }
}