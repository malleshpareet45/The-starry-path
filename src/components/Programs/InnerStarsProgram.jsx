import React from 'react';
import InnerStarsImg from '../../assets/images/Programs/Inner Stars.svg';

const InnerStarsProgram = () => {
    return (
        <>
            <div className="max-w-[1280px] mx-4 md:mx-10 xl:mx-auto mt-12 mb-8" data-aos="fade-up">
                <div className="w-full py-4 md:py-6 bg-[#E65100] text-white text-lg md:text-3xl font-[var(--font-heading)] text-center uppercase rounded-[25px] md:rounded-[40px] shadow-2xl px-4 flex items-center justify-center">
                    Life skills for every child. Ages 5-12.
                </div>
            </div>

            <section className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center gap-10 md:gap-24">
                <div className="flex-1 flex flex-col items-center text-center" data-aos="zoom-in">
                    <img src={InnerStarsImg} alt="Inner Stars" className="w-[240px] md:w-[360px] h-auto mb-4 drop-shadow-xl" />
                </div>
                <div className="flex-[1.5] text-center md:text-left" data-aos="fade-left">
                    <h3 className="text-xl md:text-3xl font-[var(--font-heading)] text-[#0A1F44] mb-6 leading-tight">
                        A character building program that helps children build: Resilience, Courage, Kindness, Gratitude, Perseverance, and Integrity.
                    </h3>
                    <p className="text-lg md:text-xl font-[var(--font-body)] text-gray-700 mb-4">Children learn these strengths through:</p>
                    <ul className="mb-8 space-y-3 inline-block text-left mx-auto md:mx-0">
                        {["Language", "Visual Tools", "Stories and Reflection", "Everyday Practice"].map((item) => (
                            <li key={item} className="text-lg md:text-xl font-[var(--font-body)] text-gray-700 flex items-start gap-3">
                                <span className="text-gray-400 mt-1 text-xl leading-none flex-shrink-0">•</span>
                                <span className="leading-tight">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-lg md:text-xl font-[var(--font-body)] text-gray-700 mb-8 opacity-90 mx-auto md:mx-0 max-w-lg">
                        <strong>Perfect for:</strong> For every child aged 5-12 because healthy habits of mind matter.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <button className="btn-join uppercase text-sm md:text-xl px-10 py-3 md:px-12 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InnerStarsProgram;
