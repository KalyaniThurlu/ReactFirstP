

import React from "react";
export class MountAndUnmount extends React.Component{
    constructor(){
        super();
        this.state={
            productName:"vivo",
            cities:["Mumbai","Hyd"],
            Rating:{rate:4.0}
        }
    }
    componentDidMount(){
        this.setState({
            productName:"vivo 8GB",
            Rating:{rate:4.6}

        })
    }


    render(){
        return(
            <div className="container-fluid">
                <dl>

                    <dt>productName</dt>

                     <dd>{this.state.productName}</dd>
                     <dt>cities:</dt>
                     <dd>{this.state.cities.map(city=><li key={city}>{city}</li>)}</dd>               
              
              <dt>Rating:</dt>
              <dd>{this.state.Rating.rate}</dd>
              
              </dl>

            </div>
        )
    }
}