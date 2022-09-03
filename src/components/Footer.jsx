import React from "react";
import { FaTwitterSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <section className="footer-section">
            <a href="http://twitter.com/mys_bm" target="_blank"><FaTwitterSquare className="media-icons"/></a>
            <a href="http://facebook.com/mysbm" target="_blank"><FaFacebookSquare className="media-icons"/></a>
            <a href="http://instagram.com/mys_bm" target="_blank"><FaInstagramSquare className="media-icons"/></a>
            <a href="http://linkedin.com/in/mbonamensa" target="_blank"><FaLinkedin className="media-icons"/></a>
            <a href="http://github.com/mbonamensa" target="_blank"><FaGithubSquare className="media-icons"/></a>
        </section>
       )
}

export default Footer