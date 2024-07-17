import { ExNavbar } from "./navbar";
export function Exhome(){
    return(
        <div>
            <h1>Navabar</h1>
            <ExNavbar Theme="bg-dark  text-white" BrandTitle="Hello"MenuItems={["Apple","mango","orange"]}/>
            <ExNavbar Theme ="bg-warning text-white" BrandTitle="Cart" MenuItems={[1,2,34,5]}/>

        </div>
    )
}
