import React, { useState, useEffect } from 'react';

function Homepage() {

    // state for homepage component
    const [heading, SetHeading] = useState('Homepage');

    // Component Mounting & Updating thing handled inside this useEffect
    useEffect(() => {
        SetHeading('Homepage Heading')
    }, [])

    return (
        <div className="homepage">
            <h1>{heading}</h1>
        </div>
    );
}

export default Homepage;