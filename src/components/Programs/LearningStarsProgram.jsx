import React from 'react';
import LearningStarsImg from '../../assets/images/Programs/Learning Stars.svg';

const LearningStarsProgram = () => {
    return (
        <>
            <div className="max-w-[1280px] mx-4 md:mx-auto mt-12 mb-8" data-aos="fade-up">
                <div className="w-full py-4 md:py-6 bg-[#0A1F44] text-white text-lg md:text-3xl font-[var(--font-heading)] text-center uppercase rounded-[20px] md:rounded-[40px] shadow-2xl px-4 flex items-center justify-center">
                    Literacy skills for confident readers and writers
                </div>
            </div>

            <section className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center gap-10 md:gap-24">
                <div className="flex-1 flex flex-col items-center text-center" data-aos="zoom-in">
                    <img src={LearningStarsImg} alt="Learning Stars" className="w-[240px] md:w-[360px] h-auto mb-4 drop-shadow-xl" />
                </div>
                <div className="flex-[1.5] text-center md:text-left" data-aos="fade-left">
                    <h3 className="text-lg md:text-2xl font-[var(--font-heading)] text-[#0A1F44] mb-6 leading-tight">
                        Structured literacy support that helps children build: Reading, Spelling, Writing, and Strong Academic Foundations.
                    </h3>
                    <p className="text-base md:text-lg font-[var(--font-body)] text-gray-700 mb-4">Children strengthen these skills through:</p>
                    <ul className="mb-8 space-y-3 inline-block text-left mx-auto md:mx-0">
                        {["Explicit Teaching", "Step-by-step Practice", "Structured Literacy Tools", "Mastery over time"].map((item) => (
                            <li key={item} className="text-base md:text-lg font-[var(--font-body)] text-gray-700 relative pl-6 flex items-start">
                                <span className="absolute left-0 text-[#F5A623] font-bold text-xl leading-none">•</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="text-base md:text-lg font-[var(--font-body)] text-gray-700 mb-8 opacity-90 mx-auto md:mx-0 max-w-lg">
                        <strong>Perfect for:</strong> For children who find reading, spelling, or writing harder than expected.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <button className="btn-join uppercase text-sm md:text-xl px-10 py-3 md:px-12 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" style={{ background: 'linear-gradient(90deg, #E91E63 0%, #673AB7 100%)' }}>
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LearningStarsProgram;
