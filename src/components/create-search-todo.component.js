import React, { Component } from 'react';

import Axios from 'axios';

export default class CreateSearchManuelTodo extends Component {
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
           nino:e.target.value,
           found:false
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

        //console.log(`Name  ${this.state.name}`);
                
        Axios.get('http://localhost:4000/carers/'+this.state.nino) 
        .then(res => {
           try{ 
            if (res.data.name === undefined) {
                this.setState({ name: 'No data is found' }); // after signing up, set the state to true. This will trigger a re-render
              }

            this.setState({
                
                name:res.data.name
                
                
            });
        } catch(e){
            this.setState({ name: 'No data is found' });
        }

            
              

            
            console.log(this.state.name+this.state.nino);

            
        })
        .catch(function(error){

           
            console.log("no record found.."+error);
            
        });

    }


    
    render() {
        // if (this.state.found) {
        //     // redirect to home if signed up
        //     return <Redirect to = {{ pathname: "/home" }} />;
        //   }
        return (

            
            <div style={{marginTop:20}}>
                <h3>Search Carers</h3>
                <form onSubmit={this.onSubmit}>
                    

                <div className="form-group">
                    <label>Search Nino: </label>
                    <input type="text"
                            className="form-control"
                            value={this.state.nino}
                            onChange={this.onChangeToDoNino} />
                    </div>
                    <div className="form-group">
                    <label>Search Name: {this.state.name} </label>
                    
                    </div>
                  
                  
                                                        

                    <div className="form-group">
                    <input type="submit" value="Search Nino" className="btn btn-primary" />
                    </div>


                </form>
            </div>
        )
    }
}