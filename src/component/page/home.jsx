import React from 'react';
import { Services } from './services';
import { RecentProject } from '../recent-project';
export const Home = () => {
    return (
        <React.Fragment>
            <Services />
            <RecentProject />
            <div id="fh5co-started">
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <span>Let's work together</span>
                            <h2>Start Your Project</h2>
                            <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                            <p><button type="submit" className="btn btn-default">Get In Touch</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        
    )
}