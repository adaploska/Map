import React from "react";
import { NavLink } from "react-router-dom"
const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/addplace">Dodaj miejsce</NavLink></li>
            <li><NavLink to="/">Wyloguj</NavLink></li>
            <li><NavLink to="./">Mapa</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink ligten-1">AA</NavLink></li>
        </ul>

    )
}
export default SignedInLinks