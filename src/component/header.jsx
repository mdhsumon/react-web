import React from 'react';
import Bg from '../img/banner.jpg';

export const Header = () => {

    const headerBg = {
        backgroundColor: '#000',
        backgroundImage: 'url('+ Bg +')'
    };

    return (
        <React.Fragment>
            <div class="fh5co-loader" style={ {display: 'none'} }></div>
            <nav class="fh5co-nav" role="navigation">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 text-center">
                            <div id="fh5co-logo"><a href="index.html">Shape<span>.</span></a></div>
                        </div>
                        <div class="col-xs-12 text-center menu-1">
                            <ul>
                                <li class="active"><a href="index.html">Home</a></li>
                                <li class="has-dropdown">
                                    <a href="services.html">Services</a>
                                    <ul class="dropdown">
                                        <li><a href="#">Web Design</a></li>
                                        <li><a href="#">eCommerce</a></li>
                                        <li><a href="#">Branding</a></li>
                                        <li><a href="#">API</a></li>
                                    </ul>
                                </li>

                                <li><a href="work.html">Work</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </nav>
            <header id="fh5co-header" className="fh5co-cover" role="banner" style={ headerBg }>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-md-offset-0 text-center">
                            <div className="display-t">
                                <div className="display-tc animate-box" data-animate-effect="fadeInUp">
                                    <h1 className="mb30">Never Stop Exploring.</h1>
                                    <p>
                                        <a href="https://vimeo.com/channels/staffpicks/93951774" target="_blank" className="btn btn-primary">Download</a> or 
                                        <a href="https://vimeo.com/channels/staffpicks/93951774" className="link-watch popup-vimeo">Watch Video</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}