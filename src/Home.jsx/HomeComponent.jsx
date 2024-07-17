import React from "react";
import { DemoNavBar } from "../ComponentProperties/Navbar";

export function Home() {
    return (
        <div className="container-fluid">
            <h3>Amazon</h3>
            <DemoNavBar Theme="bg-dark text-white" BrandTitle="Amazon" MenuItems={["Home", "Shop", "Contact", "Offers", "Sale"]} />
            <h3>Flipkart</h3>
            <DemoNavBar Theme="bg-success text-white" BrandTitle="Flipkart" MenuItems={["Home", "Deals", "Electronics", "Fashion"]} />
        </div>
    );
}
