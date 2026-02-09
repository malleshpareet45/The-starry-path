import React from 'react';
import InnerStarsImg from '../../assets/images/Programs/Inner Stars.svg';

const InnerStarsProgram = () => {
    return (
        <>
            <div className="max-w-[1280px] mx-auto px-4 my-12">
                <div className="w-full py-6 bg-[#E65100] text-white text-2xl md:text-3xl font-[var(--font-heading)] text-center uppercase rounded-[40px]">
                    Life skills for every child. Ages 5-12.
                </div>
            </div>

            <section className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center gap-12 md:gap-24">
                <div className="flex-1 flex flex-col items-center text-center" data-aos="zoom-in">
                    <img src={InnerStarsImg} alt="Inner Stars" className="w-[280px] md:w-[360px] h-auto mb-4" />
                </div>
                <div className="flex-[1.5]" data-aos="fade-left">
                    <h3 className="text-xl md:text-2xl font-[var(--font-heading)] text-[#0A1F44] mb-6 leading-snug">
                        A character building program that helps children build: Resilience, Courage, Kindness, Gratitude, Perseverance, and Integrity.
                    </h3>
                    <p className="text-lg font-[var(--font-body)] text-gray-700 mb-4">Children learn these strengths through:</p>
                    <ul className="mb-8 space-y-2">
                        {["Language", "Visual Tools", "Stories and Reflection", "Everyday Practice"].map((item) => (
                            <li key={item} className="text-lg font-[var(--font-body)] text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#F5A623] before:font-bold">
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="text-lg font-[var(--font-body)] text-gray-700 mb-8">
                        <strong>Perfect for:</strong> For every child aged 5-12 because healthy habits of mind matter.
                    </p>
                    <button className="bg-gradient-to-r from-[#E91E63] to-[#673AB7] hover:from-[#8BC34A] hover:to-[#03A9F4] text-white px-10 py-3 rounded-xl font-[var(--font-heading)] text-lg uppercase transition-all duration-300">
                        Learn More
                    </button>
                </div>
            </section>
        </>
    );
};

export default InnerStarsProgram;
