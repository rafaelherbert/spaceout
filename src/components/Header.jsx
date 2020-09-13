import React from 'react';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white d-flex justify-content-between py-4 container" id="navbar">
            <a className="navbar-brand" id="navbar-brand" href="/"><span className="space">Space</span><span className="out">Out</span></a>
            <ul className="navbar-nav" id="navbar-menu">
                <li className="nav-item px-3">
                    <a className="nav-link" href="/">Location</a>
                </li>
                <li className="nav-item px-3">
                    <a className="nav-link" href="/">About Us</a>
                </li>

                <li className="nav-item px-3">
                    <a className="nav-link" href="/">Privacy & Legal</a>
                </li>

                <li className="nav-item px-3">
                    <a className="nav-link" href="/">Contact</a>
                </li>
            </ul>
            <button type="button" className="btn register-button">Register</button>
        </nav>
    )
}

export default Header;