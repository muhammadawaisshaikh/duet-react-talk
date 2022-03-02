import React, { useState, useEffect } from 'react';

function Login() {

    // state for login component
    const [heading, SetHeading] = useState('');

    // Component Mounting & Updating thing handled inside this useEffect
    useEffect(() => {
        SetHeading('Login')
    }, [])

    return (
        <div className="login">
            <h1>{heading}</h1>
        </div>
    );
}

export default Login;