import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
//import { DataString, My, Null, SymbolExample, Undefined } from './SetdateComponent';
//import { DataStringType} from './StringTypeComponent';
//import { GetDatatype, Type } from './GetDatecomponent';
import { MyNum, Myfun } from './GetDate1Component';
//import { My } from './SetdateComponent';
//import { DataString, HelloComponent } from './helloComponent';


//import { BooleanData } from './BooleanDataComponent';
//import { CurrencyData } from './NumberDataBindingComponent';


//import { CurrencyData, DataValue } from './NumberDataBindingComponent';
//import NetFlixIndex, { NetflixIndexComponent } from './NetflixIndexComponent';
//import { Data, DataBinding, DataBindingComponets } from './DataBindingComponents';
//import Table from './components/table/table';
//import UserLog from './components/table/login';
//import { Login } from './components/table/loginusestate';
//import MyFun, { UseLogid, UserNames } from './components/table/myfun';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<Myfun/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
