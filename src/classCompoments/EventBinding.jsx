
import React from "react";
export class EventBinding extends React.Component{
    constructor(){
        super();
        this.state={
            msg:""
        }
        this.handleInsertClick=this.handleInsertClick.bind(this);
        this.handleDeletClick=this.handleDeletClick.bind(this)
       
        
    }
    handleInsertClick(){
        this.setState({
            msg:"Record inserted"
            
        })
    }
    handleDeletClick(){
        this.setState({
            msg:"Recort Deleted"
        })
    }
    render(){
        return(
            <div>
                <button onClick={ this.handleInsertClick}>insert</button>
                <button onClick={this.handleDeletClick}>Delete</button>
                <p>{this.state.msg}</p>
            </div>
        )
    }

}