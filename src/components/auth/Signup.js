import React, { useState, useEffect } from 'react';

function Signup() {

    // state for signup component
    const [heading, SetHeading] = useState('');

    // Component Mounting & Updating thing handled inside this useEffect
    useEffect(() => {
        SetHeading('Signup')
    }, [])

    return (
        <div className="signup">
            <h1>{heading}</h1>
        </div>
    );
}

export default Signup;