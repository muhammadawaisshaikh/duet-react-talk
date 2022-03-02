import React, { useState, useEffect } from 'react';

function Slider(props) {

    // state for homepage component
    const [heading, SetHeading] = useState('Slider old');

    // Component Mounting & Updating thing handled inside this useEffect
    useEffect(() => {
        console.log(props.data);
    }, [])

    return (
        <div className="homepage">
            <h1>{heading}</h1>
        </div>
    );
}

export default Slider;