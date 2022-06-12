import React from "react";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.css';

import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import StudentSignUP from "./components/StudentSignup";

import Login from "./components/Login";

import StaffSignUP from "./components/StaffSignup";
import SocialWorker from "./components/SocialWorker";
import Dropped from "./components/DroppedStd";
import ContactUs from "./components/SendMsg";
const App = () => {
  return (<div>
    <Navbar />
    <Switch>
      <Route exact path="/home"> <Home /></Route>
      <Route path="/login"> <Login /></Route>
      <Route path="/studentSignup"> <StudentSignUP /></Route>
      <Route path="/staffSignup"><StaffSignUP /></Route>
      <Route path="/socialWorker"><SocialWorker /></Route>
      <Route path="/Dropped"><Dropped /></Route>
      <Route path="/msg"><ContactUs /></Route>

    </Switch>
  </div>
  );
}

export default App;