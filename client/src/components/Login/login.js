
import React, { useState, useEffect } from "react";
import axios from 'axios';
import './login.css';
import { useNavigate } from "react-router-dom";
import {Facebook,Instagram,GitHub,YouTube} from '@mui/icons-material';
import {Twitter} from '@mui/icons-material';

export function Login() {
    const navigate = useNavigate();
    const [error,setError]=useState('')
    const login = (event) => {
        event.preventDefault();
        var config = { headers: { "enctype": "multipart/form-data" } };
        var username = document.getElementById("user").value;
        var password = document.getElementById("pass").value;
        if (username == "") {
            alert("please enter the name")
        } else if (password == "") {
            alert("please enter the password")

        } else {
            // alert("successfully..!")
            let user_list = {
                "email": username,
                "password": password
            }
            console.log(user_list);

            document.getElementById("user").value = "";
            document.getElementById("pass").value = "";


            axios.post("http://localhost:60/login", user_list, config)
                .then(function (res) {
                    if (res.data.status == 'error') {
                        alert('error')
                        // setError("Invalid User name or Password")
                       
                        console.log(res.data);
                    } else if (res.data.status == 'success') {
                        alert('success')
                        navigate("/Format")
                        console.log(res.data);

                    }
                })


        }

    }
    return (
        <>
            <div className="login-boxdiv">
                <div className="login-box">
                    <h2>Login</h2>
                    <form>
                        <div className="user-div">
                            <input type="text" name="" id="user" required="" />
                            <label>Email Id</label>
                        </div>

                        <div className="user-div">
                            <input type="password" name="" id="pass" required="" />
                            <label>Password</label>
                        </div>
                        <div>
                            <a href="#" className="forgot__pass">Forgot password?</a>
                        </div>
                        <a className="btn__submit" href="#" onClick={login}>
                            Submit
                        </a>
                        {/* {error && <div className="errormeg">{error}</div>} */}
                        <ul className="wrapper">
                <li class="icon facebook">
                  <span className="tooltip">Facebook</span>
                  <span><Facebook/></span>

                </li>
                <li className="icon twitter">
                  <span className="tooltip">Twitter</span>
                  <span><Twitter/></span>
                </li>
                <li className="icon instagram">
                  <span className="tooltip">Instagram</span>
                  <span><Instagram/></span>
                </li>
                <li className="icon github">
                  <span className="tooltip">Github</span>
                  <span><GitHub/></span>
                </li>
                <li className="icon youtube">
                  <span className="tooltip">Youtube</span>
                  <span><YouTube/></span>
                </li>
              </ul>
                    </form>
                </div>
            </div>
        </>
    );
}