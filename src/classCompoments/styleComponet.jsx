

import React from "react";
export  class StyleComponent  extends React.Component{


    constructor(){
        super();
        this.state={
            styleObg:{backgroundColor:"purple",color:"brown"},
            align:"text-align-center p-2 mt-4"
        }

    }
    render(){
        return(
            <div className="container-fluid">
                <p style={this.state.styleObg}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum tempora quod enim temporibus tenetur natus, quam repellendus delectus veniam blanditiis!</p>

            </div>
        )
    }

}