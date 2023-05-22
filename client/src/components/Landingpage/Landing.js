import React, { useEffect, useState } from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import img1 from './fotor_2023-5-18_8_53_5.png';
import img2 from './fotor_2023-5-18_18_40_4.png';
import img3 from './fotor_2023-5-18_8_54_34.png';
import imglive from './screen-3.jpg';
import imglive1 from './NZ-IND-Live-STreaming.jpg';
import imglive2 from './t20 live.jpg';
import imglive3 from './live-cricket-score45.jpg';

export function Landing() {

    return (
        <>
            {/* <navbar> */}
            <nav class="navbar navbar-light shadow sticky-top">
                <a class="navbar-brand">
                    <img className="img1" src="https://static.vecteezy.com/system/resources/previews/000/559/761/non_2x/vector-cricket-sport-logo-badge-team-championship-template.jpg" />
                </a>

                <h1 className="font-weight-bold ml-5">CRICKET CLUB</h1>
                <form className="form-inline">
                    <Link to="/Signup"><button class="btn btn-primary my-2 my-sm-0" type="submit">SignUp</button></Link>
                    <Link to="/Login"><button class="btn btn-success my-2 my-sm-0 ml-3" type="submit">LogIn</button></Link>
                </form>
            </nav>

            {/* <!-- carousel --> */}

            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img src={img2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={img3} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev raw" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next raw" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </button>
            </div>




            <div className="container-fluid row mr-auto ml-auto justify-content-around cricket-landing">
                <div class="card col-lg-2 mt-5 mb-5 card-landing m-2" >
                    <img src={imglive} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title">Live</h4>
                        <p class="card-text"> ipl Streaming</p>
                        <Link to="/Signup"><button class="btn btn-primary my-2 my-sm-0" type="submit">Next</button></Link>
                    </div>
                </div>

                <div class="card col-lg-2 mt-5 mb-5 card-landing m-2" >
                    <img src={imglive1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title">Live</h4>
                        <p class="card-text">ODI Streaming</p>
                        <Link to="/Signup"><button class="btn btn-primary my-2 my-sm-0" type="submit">Next</button></Link>
                    </div>
                </div>
                <div class="card col-lg-2 mt-5 mb-5 card-landing m-2" >
                    <img src={imglive2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title">Live</h4>
                        <p class="card-text">T20 Streaming</p>
                        <Link to="/Signup"><button class="btn btn-primary my-2 my-sm-0" type="submit">Next</button></Link>
                    </div>
                </div>
                <div class="card col-lg-2 mt-5 mb-5 card-landing m-2" >
                    <img src={imglive3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title">Live</h4>
                        <p class="card-text"> Test Streaming</p>
                        <Link to="/Signup"> <button class="btn btn-primary my-2 my-sm-0" type="submit">Next</button></Link>
                    </div>
                </div>
            </div>
        </>
    );

}
