import React from 'react';
import BannerBox from '../../assets/images/Homepage/Homepage Banner.svg';

const Hero = () => {
    return (
        <section className="hero-section min-h-[50vh] md:min-h-[70vh] flex items-center">
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
