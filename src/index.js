import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import {  StateEventDemo} from './StateEvents';
import { ExDblclick } from './Ex_DBlClick';


import { ExclearTimeout, Extimeout } from './Ex_SetTimeOut';
import { Intervaldemo } from './Ex_interval';
import { DateTimeDisplay } from './Task';
import { ExTouch } from './Ex_Touch_Events';
import {  ExApi, Fakestore, NasaAPI } from './Ex_Fecth';
import { Ex } from './exApi';
import { Exfakestore } from './Ex_Api_AddToCard';
import { Exform, FormDemo } from './Ex_FormikForm';





//import {  XmlhttpRequests } from './practice';


//import { HandlerUserName } from './Exvent';
//import { ExEventDemo, ExEventDemoComponent } from './Event_demo';
//import { ExEventArguments } from './Event_Arguments';
//import { ExEventPropagation } from './EventPropagation';
//import {  ExMouserOver} from './Ex_MouseOverEvent';


//import { StyleBinding } from './stlye_binding';


//import { ExMouseMove } from './Ex_MouseMoveEvent';
//import { ExOnchangeComponent } from './Ex_OnchangeEvent';
//import { Exanimation } from './Animation';
//import { KeyDemo } from './Ex_keyEvent';






//import { DataBinding } from './DatabindingComnent';
//import {     Wellcome} from './practice';
//import { JqueryAjaxComponent } from './JqueryAjaxComponent';
//import { AxiosData } from './AxiosComponent';
//import { OneWayDataBinding } from './OneWayDataBindingComponent';
//import { XmlHttpRequestComponent } from './ApifetchComponent';
//import { MyData } from './Xmlhttpcomponent';
//import { DataComponent } from './XmlHttpRequestComponent';
//import { Dataobj } from './ObjectComponent';
//import {  Exsymbol } from './NulldatatypeComponent';
//import { ExRegular } from './RegEXComponent';
//import { ArrayData } from './ArrayDatatypeComponent';
//import { DataString, My, Null, SymbolExample, Undefined } from './SetdateComponent';
//import { DataStringType} from './StringTypeComponent';
//import { GetDatatype, Type } from './GetDatecomponent';
//import { MyNum, Myfun } from './GetDate1Component';
//import { ExNull } from './NulldatatypeComponent';
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

<FormDemo/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
