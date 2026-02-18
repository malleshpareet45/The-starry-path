import React from 'react';
import { Link } from 'react-router-dom';
import Tangle from '../../assets/images/Homepage/Tangle.svg';

const InnerStarsSection = () => {
    return (
        <section className="py-16 px-4 max-w-[1200px] mx-auto text-left relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                {/* Left Content - Text */}
                <div className="flex flex-col justify-center" data-aos="fade-right">
                    <h2 className="text-[2.5rem] text-[#0d2b45] mb-6 uppercase leading-tight font-[var(--font-heading)]">
                        WHY DOES YOUR CHILD<br />NEED INNER STARS?
                    </h2>
                    <p className="text-lg text-gray-500 font-[var(--font-accent)] leading-relaxed max-w-md">
                        1 in 7 Australian children experience challenges such as anxiety, worry, or low confidence during their primary school years (ABS, 2023)
                    </p>
                </div>

                {/* Right Content - Skills Card */}
                <div className="w-full flex justify-center md:justify-end" data-aos="fade-left">
                    <div
                        className="bg-[#4DB6AC] text-white p-6 md:p-12 rounded-[30px] md:rounded-[40px] max-w-md w-full relative shadow-2xl"
                    >
                        <h3 className="font-[var(--font-heading)] text-xl md:text-2xl mb-6 md:mb-8 uppercase tracking-wide">
                            SKILLS CHILDREN LEARN
                        </h3>
                        <ul className="space-y-4 md:space-y-6 text-base md:text-lg font-[var(--font-accent)]">
                            <li className="flex items-start gap-4">
                                <span className="text-white mt-1 text-xl leading-none flex-shrink-0">•</span>
                                <span className="leading-tight">what's within their control</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-white mt-1 text-xl leading-none flex-shrink-0">•</span>
                                <span className="leading-tight">how effort and focus work</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-white mt-1 text-xl leading-none flex-shrink-0">•</span>
                                <span className="leading-tight">how emotions shape decisions</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-white mt-1 text-xl leading-none flex-shrink-0">•</span>
                                <span className="leading-tight">how to choose helpful thoughts</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-white mt-1 text-xl leading-none flex-shrink-0">•</span>
                                <span className="leading-tight">how to respond thoughtfully</span>
                            </li>
                        </ul>

                        <div className="mt-8">
                            <Link to="/programs" className="bg-white text-[#4DB6AC] font-[var(--font-heading)] uppercase text-sm md:text-lg px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 no-underline inline-block">
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Breakout Tangle Image - Using overflow-hidden on a 100% width container */}
            <div className="w-full mt-12 overflow-hidden" data-aos="fade-up">
                <img
                    src={Tangle}
                    alt="Decorative Tangle"
                    className="w-full h-auto block"
                    style={{ transform: 'scale(1.1)' }}
                />
            </div>
        </section>
    );
};

export default InnerStarsSection;
