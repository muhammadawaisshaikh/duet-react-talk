import React, { useState, useEffect } from 'react';
import './homepage.css';
import Slider from './Slider';

function Homepage(props) {

    // state for homepage component
    const [heading, SetHeading] = useState('Homepage old');

    // Component Mounting & Updating thing handled inside this useEffect
    useEffect(() => {
        setTimeout(() => {
            SetHeading('Homepage');
        }, 5000);
    }, [])

    return (
        <div className="homepage">
            <h1>{heading}</h1>

            <div className="section">
                <Slider data="data from homepage" />
            </div>
        </div>
    );
}

export default Homepage;