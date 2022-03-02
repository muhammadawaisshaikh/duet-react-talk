import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">DUET React App</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse float-right" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link className="nav-link active" to="/homepage">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/signup">Signup</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;