import React from 'react';
import Puzzle from '../../assets/images/Homepage/Puzzle.svg';

const DifferenceSection = () => {
    return (
        <React.Fragment>
            <section className="bg-[var(--color-orange)] text-white py-32 px-4 rounded-[30px] mx-auto max-w-[1200px] my-16 relative">
                <div className="text-center mb-12" data-aos="fade-down">
                    <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] uppercase tracking-wide">
                        WHAT MAKES US DIFFERENT
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">

                    {/* Left: Puzzle Image */}
                    <div className="flex-1 flex flex-col items-center" data-aos="fade-right">
                        <p className="text-[#0d2b45] font-[var(--font-accent)] text-lg md:text-xl self-center md:ml-8">
                            The Starry Path integrates
                        </p>
                        <img
                            src={Puzzle}
                            alt="Psychology & Education Puzzle"
                            className="w-full max-w-[600px] object-contain"
                        />
                    </div>

                    {/* Right: Text Content */}
                    <div className="flex-1 text-left md:pl-8" data-aos="fade-left">
                        <h3 className="font-[var(--font-heading)] text-2xl uppercase mb-6">
                            THE FOCUS IS ON
                        </h3>
                        <ul className="space-y-4 font-[var(--font-accent)] text-lg">
                            <li className="flex items-start gap-3">
                                <span className="text-[#0d2b45] mt-1.5 text-[0.6rem]">•</span>
                                <span>Understanding self and thinking frameworks</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#0d2b45] mt-1.5 text-[0.6rem]">•</span>
                                <span>Evidence-aligned tools that turn research into everyday practice</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#0d2b45] mt-1.5 text-[0.6rem]">•</span>
                                <span>Healthy habits of mind</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#0d2b45] mt-1.5 text-[0.6rem]">•</span>
                                <span>Skills that sustain learning far beyond the classroom</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Button outside the orange section */}
            <div className="flex justify-center mb-16" data-aos="zoom-in">
                <button className="btn-join uppercase" style={{ padding: '1rem 3rem', fontSize: '1.4rem' }}>
                    EXPLORE THE STORY PATH SYSTEM
                </button>
            </div>
        </React.Fragment>
    );
};

export default DifferenceSection;
