import React from 'react';
import BigIdeasBg from '../../assets/images/Homepage/Big Ideas.svg';

const BigIdeasSection = () => {
    return (
        <section className="section big-ideas-section">
            {/* Using the SVG as a full graphic as it likely contains the notebook lines and sticky notes */}
            <img src={BigIdeasBg} alt="Big Ideas" className="big-ideas-image" data-aos="zoom-in" />
            <div className="big-ideas-cta" data-aos="fade-up" data-aos-delay="200">
                <button className="btn-join uppercase" style={{ backgroundColor: '#E91E63', padding: '1rem 3rem' }}>
                    EXPLORE HOW THE STARRY PATH WORKS
                </button>
            </div>
        </section>
    );
};

export default BigIdeasSection;
