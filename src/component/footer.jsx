import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return(
        <footer id="fh5co-footer" role="contentinfo">
            <div className="container">
                <div className="row row-pb-md">
                    <div className="col-md-4 fh5co-widget ">
                        <h3>Shape.</h3>
                        <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                        <p><Link to="/">Learn More</Link></p>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1 ">
                        <ul className="fh5co-footer-links">
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Help</Link></li>
                            <li><Link to="/">Contact</Link></li>
                            <li><Link to="/">Terms</Link></li>
                            <li><Link to="/">Meetups</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1 ">
                        <ul className="fh5co-footer-links">
                            <li><Link to="/">Shop</Link></li>
                            <li><Link to="/">Privacy</Link></li>
                            <li><Link to="/">Testimonials</Link></li>
                            <li><Link to="/">Handbook</Link></li>
                            <li><Link to="/">Held Desk</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1 ">
                        <ul className="fh5co-footer-links">
                            <li><Link to="/">Find Designers</Link></li>
                            <li><Link to="/">Find Developers</Link></li>
                            <li><Link to="/">Teams</Link></li>
                            <li><Link to="/">Advertise</Link></li>
                            <li><Link to="/">API</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="row copyright">
                    <div className="col-md-12 text-center">
                        <p>
                            <small className="block">&copy; 2016 Free HTML5. All Rights Reserved.</small> 
                            <small className="block">Designed by <Link to="http://freehtml5.co/" target="_blank">FreeHTML5.co</Link> Demo Images: <Link to="http://pixeden.com/" target="_blank">Pixeden</Link> &amp; <Link to="http://unsplash.com/" target="_blank">Unsplash</Link></small>
                        </p>
                        <ul className="fh5co-social-icons">
                            <li><Link to="/"><i className="icon-twitter"></i></Link></li>
                            <li><Link to="/"><i className="icon-facebook"></i></Link></li>
                            <li><Link to="/"><i className="icon-linkedin"></i></Link></li>
                            <li><Link to="/"><i className="icon-dribbble"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}