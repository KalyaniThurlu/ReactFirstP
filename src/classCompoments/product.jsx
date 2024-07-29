

import React from "react";
export  class Exxclass extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            Name:"madhu",
            Age:30
        }
        
    }
    render(){
        return(
            <div className="container-fluid">
                <dl>

                    <dt>name:</dt>
                    <dd>{this.state.Name}</dd>

               <dt>Age:</dt>
               <dd>{this.state.Age}</dd>
                </dl>

            </div>

        )

    }

}