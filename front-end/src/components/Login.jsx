
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "../App.css"
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';



const Login = () => {

    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [user, setUser] = useState({
        who: ""
    })
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setUser({ ...user, [name]: value });
    }


    const loginUser = async (event) => {
        event.preventDefault();

        //need to develop from backend
        const res = await fetch("/routToPostdata", {
            method: "POST",
            headers: {},
            body: JSON.stringify({
                email, password

            })
        })
        const data = res.json();
    }

    return (<div>
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form action="POST">
                            <div class="form-check">
                                <label class="form-check-label" htmlFor="flexRadioDefault2">
                                    Staff
                                </label>
                                <input value="staffSignup" onChange={handleChange} class="form-check-input" type="radio" name="who" id="flexRadioDefault2" />

                            </div>
                            <div class="form-check">
                                <label class="form-check-label" htmlFor="flexRadioDefault2">
                                    Worker
                                </label>
                                <input value="socialWorker" onChange={handleChange} class="form-check-input" type="radio" name="who" id="flexRadioDefault2" />
                            </div>
                            <div class="form-check">
                                <label class="form-check-label" htmlFor="flexRadioDefault2">
                                    Admin
                                </label>
                                <input value="studentSignup" onChange={handleChange} class="form-check-input" type="radio" name="who" id="flexRadioDefault2" />
                            </div>

                            <br></br>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example3"  >Email address</label>
                                <input name="email" type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" value={email} onChange={(e) => { setemail(e.target.value) }} />
                            </div>


                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="form3Example4" type="password" >Password</label>
                                <input type="password" name="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                            </div>

                            <div className="d-flex justify-content-between align-items-center">

                                <div className="form-check mb-0">
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <NavLink to={user.who} type="button" className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
            <div
                className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2020. All rights reserved.
                </div>


            </div>
        </section >
    </div >)
}

export default Login;