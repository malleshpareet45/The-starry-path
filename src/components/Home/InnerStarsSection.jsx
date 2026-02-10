import React from 'react';
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
                        <ul className="space-y-3 md:space-y-4 text-base md:text-lg font-[var(--font-accent)]">
                            <li className="flex items-start gap-3">
                                <span className="text-white mt-1.5 text-[0.6rem]">•</span>
                                <span>what's within their control</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-white mt-1.5 text-[0.6rem]">•</span>
                                <span>how effort and focus work</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-white mt-1.5 text-[0.6rem]">•</span>
                                <span>how emotions shape decisions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-white mt-1.5 text-[0.6rem]">•</span>
                                <span>how to choose helpful thoughts</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-white mt-1.5 text-[0.6rem]">•</span>
                                <span>how to respond thoughtfully</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Content - Tangle & Text (Perfected breakout) */}
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 overflow-hidden" data-aos="fade-up">
                <img
                    src={Tangle}
                    alt="Decorative Tangle"
                    className="w-[112%] max-w-none ml-[-5%] h-auto block"
                />
            </div>
        </section>
    );
};

export default InnerStarsSection;
