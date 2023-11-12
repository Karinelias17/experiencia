
import logo from "./banner.jpg"
import Texto from "./texto"
import Recact from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Header (){
    const[texto, setTexto] =useState("hola");
    return(
        <img src={logo}alt="Logo" className="img-fluid"></img>

    )
}
export default Header;