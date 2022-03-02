import React, { useState, useEffect } from 'react';
import './homepage.css';

function Homepage() {

    // state for homepage component
    const [heading, SetHeading] = useState('');

    // Component Mounting & Updating thing handled inside this useEffect
    useEffect(() => {
        SetHeading('Homepage')
    }, [])

    return (
        <div className="homepage">
            <h1>{heading}</h1>
        </div>
    );
}

export default Homepage;