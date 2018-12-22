import React from 'react';
import { Link } from 'react-router-dom'; 
import aboutImg from '../../img/banner.jpg';
import person from '../../img/person.jpg';

export const About = () => {

    return (
        <React.Fragment>
            <div id="fh5co-about">
                <div className="container">
                    <div className="row row-pb-md">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <span>Know us</span>
                            <h2>Our History</h2>
                            <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                        </div>
                    </div>
                    <div className="row row-pb-md animate-box">
                        <div className="col-md-6 col-md-push-6">
                            <div className="desc">
                                <h3>Mission &amp; Vission</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo est quis mollitia ratione magni assumenda repellat atque modi temporibus tempore ex. Dolore facilis ex sunt ea praesentium expedita numquam?</p> 
                                <p>Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci rem dolorem nesciunt perferendis quae amet deserunt eum labore quidem minima.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-md-pull-6">
                            <img className="img-responsive" src={ aboutImg } alt="about" />
                        </div>
                    </div>
                </div>
            </div>

            <div id="fh5co-team" className="fh5co-bg-section">
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <span>Productive Staff</span>
                            <h2>Meet Our Staff</h2>
                            <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-4 animate-box" data-animate-effect="fadeIn">
                            <div className="fh5co-staff">
                                <img src={ person } alt="Free HTML5 Templates by gettemplates.co" />
                                <h3>Jean Smith</h3>
                                <strong className="role">Web Designer</strong>
                                <p>Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci.</p>
                                <ul className="fh5co-social-icons">
                                    <li><Link to="/"><i className="icon-facebook"></i></Link></li>
                                    <li><Link to="/"><i className="icon-twitter"></i></Link></li>
                                    <li><Link to="/"><i className="icon-dribbble"></i></Link></li>
                                    <li><Link to="/"><i className="icon-github"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 animate-box" data-animate-effect="fadeIn">
                            <div className="fh5co-staff">
                                <img src={ person } alt="Free HTML5 Templates by gettemplates.co" />
                                <h3>Hush Raven</h3>
                                <strong className="role">Front-end Developer</strong>
                                <p>Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci.</p>
                                <ul className="fh5co-social-icons">
                                    <li><Link to="/"><i className="icon-facebook"></i></Link></li>
                                    <li><Link to="/"><i className="icon-twitter"></i></Link></li>
                                    <li><Link to="/"><i className="icon-dribbble"></i></Link></li>
                                    <li><Link to="/"><i className="icon-github"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 animate-box" data-animate-effect="fadeIn">
                            <div className="fh5co-staff">
                                <img src={ person } alt="Free HTML5 Templates by gettemplates.co" />
                                <h3>Alex King</h3>
                                <strong className="role">Back-end Developer</strong>
                                <p>Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci.</p>
                                <ul className="fh5co-social-icons">
                                    <li><Link to="/"><i className="icon-facebook"></i></Link></li>
                                    <li><Link to="/"><i className="icon-twitter"></i></Link></li>
                                    <li><Link to="/"><i className="icon-dribbble"></i></Link></li>
                                    <li><Link to="/"><i className="icon-github"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}