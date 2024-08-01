import React from 'react';
import { FaFacebook, FaInstagram} from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    
    return (
        <>
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Nairobi Y's Men Club. All Rights Reserved.</p>
                <p>
                    Follow us on 
                    <a className="footer-link" href="https://www.facebook.com/nairobiysmen" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a> and 
                    <a className="footer-link" href="https://www.instagram.com/nairobi_ysmen" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
                </p>
            </div>
            <div>
                <p>
                    Contact us: <a className="footer-link" href="mailto:info@nairobiysmen.org">info@nairobiysmen.org</a>
                </p>
            </div>
        </footer>
        </>
    );
}

export default Footer;