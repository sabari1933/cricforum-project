import React, { useState, useEffect } from "react";
import axios from "axios";
import './Playerdetails.css';
import { Facebook, Instagram, LinkedIn, GitHub, ArrowUpward } from '@mui/icons-material';

export function Playerdetails() {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        var playerId = localStorage.getItem('playerdetails');

        fetch("http://localhost:60/playerdetailsGet/" + playerId)
            .then(res => res.json())
            .then(data => setDetails(data))

    }, []);

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
                        <h1 className="font-weight-bold ml-0">PLAYERS DETAILS</h1>
                    </div>
                </div>
            </nav>
            <div className="container-fluid userlist-bg bg-info">
                <div className="col-lg-10 userlist-box">
                    <div className="title-player pt-5">CRICKET PLAYERS DETAILS</div><hr className="userlist-hr" />
                    <table className="w-100 text-center table_two pb-5 mt-5" border={"2px"}>
                        <thead>

                            <th>Player Name</th>
                            <th>Player Age</th>
                            <th>Player DOB</th>
                            <th>Player Role</th>
                            <th>Player Gender</th>
                            <th>Player Country</th>
                            <th>Total Score</th>
                            <th>Player Image</th>

                        </thead>
                        <tbody>
                            {details.map((value, index) => (
                                <>
                                    <tr>
                                        <td>{value.player_name}</td>
                                        <td>{value.player_age}</td>
                                        <td>{value.player_dob}</td>
                                        <td>{value.player_role}</td>
                                        <td>{value.player_gender}</td>
                                        <td>{value.player_country}</td>
                                        <td>{value.player_score}</td>
                                        <td><img src={value.player_image} style={{ width: "200px" }} alt="image" /></td>
                                        {/* <td><button type="button" class="btn btn-primary">Next</button></td> */}
                                    </tr>
                                </>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
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