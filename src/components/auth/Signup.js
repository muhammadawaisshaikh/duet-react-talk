import React, { useState, useEffect } from 'react';

function Signup() {

    // state for signup component
    const [heading, SetHeading] = useState('Signup');

    // Component Mounting & Updating thing handled inside this useEffect
    useEffect(() => {
        SetHeading('Signup Heading')
    }, [])

    return (
        <div className="signup">
            <h1>{heading}</h1>
        </div>
    );
}

export default Signup;