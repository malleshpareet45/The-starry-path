import React from 'react';
import BannerBox from '../../assets/images/Homepage/Homepage Banner.svg';

const Hero = () => {
    return (
        <section className="hero-section">
            <img
                src={BannerBox}
                alt="The Starry Path Banner"
                className="hero-banner"
                loading="eager"
                fetchpriority="high"
            />
        </section>
    );
};

export default Hero;
