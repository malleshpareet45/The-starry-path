import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Slide1 from '../../assets/images/Homepage/Both Matter_1.svg';
import Slide2 from '../../assets/images/Homepage/Both Matter_2.svg';
import Slide3 from '../../assets/images/Homepage/Both Matter_3.svg';
import Slide4 from '../../assets/images/Homepage/Both Matter_4.svg';

// Array of slides
const slides = [Slide1, Slide2, Slide3, Slide4];

const ScaleSection = () => {
    const [ref, isVisible] = useScrollAnimation(0.2);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000); // 5 seconds per slide
        return () => clearInterval(interval);
    }, []);

    // Manual navigation
    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="py-12 md:py-20 px-4 max-w-[1400px] mx-auto text-center relative min-h-[60vh] md:min-h-[85vh] flex flex-col justify-center">
            <h2 className="text-[#0d2b45] font-[var(--font-heading)] text-3xl md:text-5xl mb-8 md:mb-16 uppercase tracking-wide" data-aos="fade-up">
                ACADEMICS + LIFE SKILLS = REAL EDUCATION
            </h2>

            <div className="relative w-full max-w-[1000px] mx-auto min-h-[300px] md:min-h-[500px] flex items-end justify-center mb-0" data-aos="zoom-in">

                {/* Slides */}
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 flex flex-col items-center justify-end transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        {/* Seesaw Animation applied to the active image */}
                        <div className="flex-grow flex items-end justify-center w-full mb-0 pb-0 relative z-0">
                            <img
                                src={slide}
                                alt={`Balance Scale Visualization ${index + 1}`}
                                className={`w-full h-full object-contain ${index === 0 ? 'mb-[-1.7rem] md:mb-[-2.2rem]' : index === 1 ? 'mb-[-2.1rem] md:mb-[-2.9rem]' : index === 3 ? 'mb-[-3rem] md:mb-[-4rem]' : 'mb-[-2.4rem] md:mb-[-3.4rem]'} ${index === currentIndex ? 'animate-seesaw' : ''}`}
                                style={{ maxHeight: '400px' }}
                            />
                        </div>

                        {/* Purple Bar - Unique for each slide (same text) */}
                        <div className="relative w-full max-w-[800px] z-10">
                            <div className="bg-[#512DA8] text-white py-3 px-6 rounded-2xl w-full text-center shadow-lg">
                                <span className="font-[var(--font-heading)] uppercase tracking-wider text-sm md:text-base">
                                    HABITS OF MIND FOR REAL-LIFE LEARNING
                                </span>
                            </div>
                        </div>
                    </div>
                ))}


            </div>



            <style>{`
                @keyframes seesaw {
                    0% { transform: rotate(0deg); }
                    25% { transform: rotate(-1.5deg); }
                    75% { transform: rotate(1.5deg); }
                    100% { transform: rotate(0deg); }
                }
                .animate-seesaw {
                    animation: seesaw 6s ease-in-out infinite;
                    transform-origin: center bottom;
                }
            `}</style>
        </section>
    );
};

export default ScaleSection;
