import React, { useState, useEffect } from 'react';
import './about.css';

function About() {

    // state for about component
    const [heading, SetHeading] = useState('About');

    // Component Mounting & Updating thing handled inside this useEffect
    useEffect(() => {
        SetHeading('About Heading')
    }, [])

    return (
        <div className="about">
            <h1>{heading}</h1>
        </div>
    );
}

export default About;