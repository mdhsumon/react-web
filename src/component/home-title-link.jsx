import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; 

export const HomeTitleLink = () => {

    return (
        <Router>
            <p>
                <Link to="https://vimeo.com/channels/staffpicks/93951774" target="_blank" className="btn btn-primary">Download</Link> or 
                <Link to="https://vimeo.com/channels/staffpicks/93951774" className="link-watch popup-vimeo">Watch Video</Link>
            </p>
        </Router>
    );
}