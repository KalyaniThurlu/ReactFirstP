import React from "react";
import { SideBar } from "./side_bar";
export class Properties extends React.Component{
    constructor(){
        super();

    }
    render(){
        return(
            <div className="container-fluid">
                
                

                <header className="mt-4">
                    <SideBar title="Shopper:" navitems={["Home","Shop", "Blog", "Page", "Contact" ]}></SideBar>

                </header>
                 </div>

        )
    }
}