import React from "react";

import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";



function Register () {
    return (
    <>
    <Header />
        <h1>Register component works</h1>
         <Link to="/login">Login</Link>
         <Footer />
    </>
    
    );
}
export default Register;