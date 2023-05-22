
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './Format.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, LinkedIn, GitHub, ArrowUpward } from '@mui/icons-material';

function Format() {
    const navigate = useNavigate();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch("http://localhost:60/formatGet")

            .then(res => res.json())
            .then(data => setDetails(data))

    }, []);

    const Selectformat = (value) => () => {
        alert(value.format_name);
        localStorage.setItem('format', value.format_name);
        navigate('/team');
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
                        <h1 className="font-weight-bold ml-5">CRICKET FORMAT</h1>
                    </div>
                </div>
            </nav>



            <div className="row mr-0 text-center pt-5 pb-5 container-fluid format-cricket">
                {details.map((value, index) => (
                    <>
                        <div className="card col-lg-3 p-3 col-12  container format-odi "onClick={Selectformat(value)} style={{ width: '18rem' }} >
                            <img src={value.format_url} height="400" className="card-img-top" alt="..." />
                            <div className="card-body card_body">
                                <h2 className="card-title" id="teamTitle">{value.format_name}</h2>
                                <p className="card-text">{value.format_desc}</p>
                                {/* <a href="#" className="" >View More</a> */}
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

export default Format;