import { StrictMode } from "react";
import  ReactDOM  from "react-dom";
import "./style.css"
import App from './App' 
import {BrowserRouter, BrowserRouter as Router} from "react-router-dom"
import AppContextProvider from "./context/App_context";

ReactDOM.render(
    <StrictMode>
       <AppContextProvider>
       <Router>
        <App/>
     </Router>
     </AppContextProvider>
     </StrictMode>,
    document.getElementById('root')
)