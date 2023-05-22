import React, { useState, useEffect } from "react";
import './Teamplayers.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, LinkedIn, GitHub, ArrowUpward } from '@mui/icons-material';

export function Teamplayers() {
    const navigate = useNavigate();
    const [details, setDetails] = useState([]);
    const teamlist = localStorage.getItem('teamlist')
    let format = localStorage.getItem('format')
    useEffect(() => {
        fetch("http://localhost:60/playerGet/" + format + "/" + teamlist)
            .then(res => res.json())
            .then(data => setDetails(data))

    }, []);

    const Selectid = (value) => () => {
        console.log(value);
        alert(value.sNo);
        localStorage.setItem('playerdetails', value.sNo);
        navigate('/playerdetails');
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
                        <h1 className="font-weight-bold ml-5">{teamlist}</h1>
                    </div>
                </div>
            </nav>
            <div className="container-fluid row mr-auto ml-auto justify-content-around cricket-player">
                {details.map((value, index) => (
                    <>
                        <div class="card col-lg-2 mt-5 mb-5 card-player m-2" onClick={Selectid(value)}>
                            <img src={value.player_image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <img src={value.country_flag} style={{ width: "20px" }} class="card-img-top" alt="..." />
                                <h4 class="card-title">Format:{value.player_format}</h4>
                                <p class="card-text"> Name:{value.player_name}</p>

                            </div>
                        </div>
                    </>
                ))}
            </div>
            {/* <div className="container-fluid userlist-bg bg-info">
                <div className="col-lg-10 userlist-box">
                    <div className="title text-center">CRICKET PLAYERS LIST</div><hr className="userlist-hr" />
                    <table className="w-100 text-center table_one " border={"2px dark"}>
                        <thead>
                            <th>sNo</th>
                            <th>Country Code</th>
                            <th>Player Format</th>
                            <th>Country Flag</th>
                            <th>Player Name</th>
                            <th>Rank</th>
                            <th>Player Image</th>
                            <th>Next</th>
                        </thead>
                        <tbody>
                            {details.map((value, index) => (
                                <>
                                    <tr>
                                        <td>{value.sNo}</td>
                                        <td>{value.country_code}</td>
                                        <td>{value.player_format}</td>
                                        <td><img src={value.country_flag} style={{ width: '50px' }} alt="image" /></td>
                                        <td>{value.player_name}</td>
                                        <td>{value.player_rank}</td>
                                        <td><img src={value.player_image} style={{ width: "200px" }} alt="image" /></td>
                                        <td><button type="button" onClick={Selectid(value)} class="btn btn-primary">Next</button></td>
                                    </tr>
                                </>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div> */}
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