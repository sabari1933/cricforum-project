import React, { useState, useEffect } from "react";
import './Teamname.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, LinkedIn, GitHub, ArrowUpward } from '@mui/icons-material';

export function Teamname() {
    const navigate = useNavigate();
    const [details, setDetails] = useState([]);

    let format = localStorage.getItem('format')
    console.log(format);
    useEffect(() => {

        fetch("http://localhost:60/teamlistGet")

            .then(res => res.json())
            .then(data => setDetails(data))

    }, [])
    const Selectteam = (value) => () => {
        console.log(value);
        alert(value.country_code);
        localStorage.setItem('teamlist', value.country_code);
        navigate('/teamplayers');
    }

    return (
        <>
             <nav class="navbar navbar-light shadow sticky-top">
                <div className="col-lg-12 col-12 row mr-auto ml-auto">
                    <div className="col-lg-4 col-4">
                        <a class="navbar-brand">
                            <img className="img1" src="https://static.vecteezy.com/system/resources/previews/000/559/761/non_2x/vector-cricket-sport-logo-badge-team-championship-template.jpg" />
                        </a>
                    </div>
                    <div className="col-lg-8 col-8">
                        <h1 className="font-weight-bold ml-5">{format}</h1>
                    </div>
                </div>
            </nav>

            <div className="row mr-0 text-center container-fluid  pt-5 pb-5 cricket-team">
                {details.map((value, index) => (
                    <>
                        <div className="card col-lg-3 container team-card" onClick={Selectteam(value)} style={{ width: '18rem' }} >
                            <img src={value.country_url} height="250" className="card-img-top card-img" alt="..." />
                            <div className="card-body team-body">
                                {/* <h2 className="card-title" id="teamTitle">{value.country_code}</h2> */}
                                <h2 className="card-title" id="teamTitle">{value.country_name}</h2>
                                <p className="card-text">{value.country_desc}</p>
                                {/* <a href="#" className=" btn-primary" >View....</a> */}
                            </div>
                        </div>

                    </>
                ))}
            </div>
            <footer className="footer">
                <div className="footer-head container-fluid col-lg- 12">
                    <h1>Let's Play Cricket</h1>
                    <div className="row mr-0 container text-center">
                        <div className="footer-text col-lg-4 ">
                            <p>Copyright &copy; 2023 by sabari </p>
                        </div>
                        <div className="footer-media col-lg-6">
                            <a href="#"><Facebook /></a>
                            <a href="https://www.instagram.com/g_u_l_l_y_b_o_y_33/"><Instagram /></a>
                            <a href="https://www.linkedin.com/in/sabari19334/"><LinkedIn /></a>
                            <a href="https://github.com/sabari1933"><GitHub /></a>
                        </div>
                        <div className="footer-icon col-lg-1">
                            <a href="#home"><ArrowUpward /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );


}
