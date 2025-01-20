import React from "react";
import {NavLink} from "react-router-dom";

function NavBar() {
    const navStyles = {
        display: "flex", 
        gap: "1rem",
        padding: "1rem",
        backgroundColor: "#f0f0f0"
    };

    const activeStyle = {
        fontWeight: "bold",
        color: "blue",
    };
    return (
        <nav style={navStyles}>
            <NavLink to="/" exact style={{textDecoration: "none"}} activeStyle={activeStyle}>Home</NavLink>
            <NavLink to="/library" style={{textDecoration: "none"}} activeStyle={activeStyle}>Workout Library</NavLink>
            <NavLink to="/planner" style={{textDecoration: "none"}} activeStyle={activeStyle}>Planner</NavLink>
            <NavLink to="/add" style={{textDecoration: "none"}} activeStyle={activeStyle}>Add Workout</NavLink>
        </nav>
    );
}

export default NavBar;