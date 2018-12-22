import React from 'react';
import { Link } from 'react-router-dom'; 

export const HomeTitleLink = () => {

    return (
        <p>
            <Link to="https://vimeo.com/channels/staffpicks/93951774" target="_blank" className="btn btn-primary">Download</Link> or 
            <Link to="https://vimeo.com/channels/staffpicks/93951774" className="link-watch popup-vimeo">Watch Video</Link>
        </p>
    )
}