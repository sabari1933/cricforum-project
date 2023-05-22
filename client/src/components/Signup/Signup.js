import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Signup.css';
import { useNavigate } from "react-router-dom";
function Signup() {
    const navigate = useNavigate();

    const signup = (event) => {
        event.preventDefault();
        var config = { headers: { "enctype": "multipart/form-data" } };
        var first_name = document.getElementById("fname").value;
        var last_name = document.getElementById("lname").value;
        var gender = document.getElementById("gender").value;
        var dob = document.getElementById("dob").value;
        var email = document.getElementById("email").value;
        var pattern = new RegExp("([a-z]+)(@)([a-z]+)(\.)([a-z]{2,3})");
        var result = email.match(pattern);
        var phone_number = document.getElementById("phone").value;
        var pattern = new RegExp('[89][0-9]{8}')
        var result = phone_number.match(pattern);
        var password = document.getElementById("pwt").value;
        var pattern = new RegExp("[A-Za-z]+[@][0-9]");
        var result = password.match(pattern)
        var cpassword = document.getElementById("cpwt").value;

        if (first_name == "" || first_name == null) {
            alert("please fill the first name");
        } else if (last_name == "" || last_name == null) {
            alert("please fill the last name");
        } else if (gender == "" || gender == null) {
            alert("please fill the gender");
        } else if (dob == "" || dob == null) {
            alert("please fill the Date of Birth");
        } else {
            let userInfo = {
                "first_name": first_name,
                "last_name": last_name,
                "gender": gender,
                "dob": dob,
                "email": email,
                "phone_number": phone_number,
                "password": password
            }
            console.log(userInfo);
            axios.post("http://localhost:60/add", userInfo, config)
                .then((res) => {
                    console.log(res.data);
                    alert("success fully")
                    navigate("/login")
                })
                .catch((error) => {
                    console.log(error.res.data);
                    
                })
        }
    }

    return (
        <>
            <div className="container-fluid reg-form">
                <div className="sign-div ">
                    <form action="#" className="form-sign">
                        <h2 className="head">Register Here</h2>
                        <div className="user-box">
                            <label className="">First Name *</label> <br />
                            <input type="text" id="fname" name="fname" /><br />
                        </div>
                        <div className="user-box">
                            <label>Last Name *</label> <br />
                            <input type="text" id="lname" name="lname" /> <br />
                        </div>
                        <div className="user-box">
                            <label>Gender </label><br />
                            <input type="text" id="gender" name="gender" /><br />
                        </div>
                        <div className="user-box">
                            <label>Date of Birth </label><br />
                            <input type="date" id="dob" name="dob" /><br />
                        </div>
                        <div className="user-box">
                            <label> Email *</label><br />
                            <input type="email" id="email" name="email" /><br />
                        </div>
                        <div className="user-box">
                            <label>Phone Number *</label><br />
                            <input type="number" name="phone" id="phone" /><br />
                        </div>
                        <div className="user-box">
                            <label>Password *</label><br />
                            <input type="password" name="pwt" id="pwt" /><br />
                        </div>
                        <div className="user-box">
                            <label>Conform Password *</label><br />
                            <input type="password" name="cpwt" id="cpwt" /><br />
                        </div>
                        <button className="sbtn" onClick={signup}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Signup;