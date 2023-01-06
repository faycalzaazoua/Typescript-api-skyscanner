import React from "react";
import '../App.css';
import {Link} from "react-router-dom"

export default function Vols() {
    return(
        
        <nav>
            <Link to="/">Acceuil</Link>
            &ensp; &ensp;
            <Link to="/airport">Les aeroports</Link>
            &ensp; &ensp;
            <Link to="/vols">Les vols</Link>
        </nav>

    )
}

