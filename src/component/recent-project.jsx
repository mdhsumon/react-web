import React from 'react';
import { Link } from 'react-router-dom';
import work1 from '../img/work-sample-1.jpg';
import work2 from '../img/work-sample-2.jpg';
import work3 from '../img/work-sample-3.jpg';

export const RecentProject = () => {
    return(
        <div id="fh5co-project">
            <div className="container">
                <div className="row row-pb-md">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading  animate-box">
                        <span>Want Some Cool Stuff</span>
                        <h2>Recent Project</h2>
                        <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6 fh5co-project animate-box" data-animate-effect="fadeIn">
                        <Link to="#"><img src={work1} alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive" />
                            <h3>Clipboard Office</h3>
                        </Link>
                    </div>
                    <div className="col-md-4 col-sm-6 fh5co-project animate-box" data-animate-effect="fadeIn">
                        <Link to="#"><img src={work2} alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive" />
                            <h3>Smart Layers</h3>
                        </Link>
                    </div>
                    <div className="col-md-4 col-sm-6 fh5co-project animate-box" data-animate-effect="fadeIn">
                        <Link to="#"><img src={work3} alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive" />
                            <h3>Notepad Mockup</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}