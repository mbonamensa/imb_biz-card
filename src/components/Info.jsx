import React from "react";

import { FaEnvelope } from 'react-icons/fa'; 

function Info() {
    return (
        <section className="info-section">
            <h1>Maame Y. S. Bona-Mensa</h1>
            <h4>Frontend Engineer</h4>
            <a className="website-link" href="https://mbonamensa.netlify.app">mbonamensa.netlify.app</a>
            <a className="email-link" href="mailto:mbonamensa@gmail.com"><button><FaEnvelope className="email-icon" />Email</button></a>
        </section>
    )
}

export default Info