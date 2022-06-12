import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import logo from "./logo192.png"
import "../../src/App.css"
const Navbar = () => {
    return <div>
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <NavLink className="navbar-brand" to="/"><img src={logo} alt="logo" className="App-logo" /></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav .mr-auto" >
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/studentSignup">Student</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/staffSignup">Staff</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/socialWorker">SocialWorker</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Dropped">DroppedStudents</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/msg">IrregularityMessage</NavLink>
                    </li>
                </ul>

            </div>
        </nav >
    </div >
}

export default Navbar;