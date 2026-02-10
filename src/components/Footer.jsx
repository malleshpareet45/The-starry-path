import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo/Logo.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="footer-logo">
                        <img src={Logo} alt="The Starry Path" />
                    </div>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/people/The-Starry-Path/61576125174414/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V1.61c-.301-.043-1.46-.16-2.73-.16-2.67 0-4.5 1.67-4.5 4.7v2.35H7v4h3.27V22.5h3.73V13.5Z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/the.starry.path/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.058 1.066.048 1.79.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.637.417 1.361.465 2.427.048 1.066.058 1.405.058 4.122s-.01 3.056-.058 4.122c-.048 1.066-.218 1.79-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.637.247-1.361.417-2.427.465-1.066.048-1.405.058-4.122.058s-3.056-.01-4.122-.058c-1.066-.048-1.79-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.637-.417-1.361-.465-2.427C2.01 15.056 2 14.717 2 12s.01-3.056.058-4.122c.048-1.066.218-1.79.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.427 2.523c.637-.247 1.361-.417 2.427-.465C8.944 2.01 9.283 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0ZM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" /></svg>
                        </a>
                        <a href="mailto:hello@thestarrypath.com.au" className="social-icon" aria-label="Email">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" /></svg>
                        </a>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-acknowledgment">
                        We acknowledge the Bunurong People of the Kulin Nation, the Traditional
                        Custodians of the land on which we live, learn, and grow. We pay our respects to
                        Elders past, present, and emerging and recognize their deep and ongoing
                        connection to this land, sky, and waters. As we guide children on their learning
                        journey, we honor the wisdom, resilience, and storytelling traditions of First Nations
                        peoples—who have been sharing knowledge under these same stars for thousands
                        of years. May we walk together with respect, curiosity, and a shared commitment
                        to learning, growing, and shining bright.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
