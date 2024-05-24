"use client";

import Link from 'next/link';
import { useState } from 'react';

const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">Main Street Digital</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded={expanded ? "true" : "false"}
                    aria-label="Toggle navigation"
                    onClick={() => setExpanded(!expanded)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link href="/" className="nav-link" onClick={() => setExpanded(false)}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about-me" className="nav-link" onClick={() => setExpanded(false)}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/coaching" className="nav-link" onClick={() => setExpanded(false)}>Coaching</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className="nav-link" onClick={() => setExpanded(false)}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default CustomNavbar;