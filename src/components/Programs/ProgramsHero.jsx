import React from 'react';
import BoxImg from '../../assets/images/Programs/Box.svg';

const ProgramsHero = () => {
    return (
        <section className="max-w-[1280px] mx-4 md:mx-auto mt-6">
            <div className="bg-[#002147] text-white rounded-[25px] md:rounded-[40px] py-10 md:py-20 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10 md:gap-16 shadow-2xl">
                <div className="flex-1 w-full flex justify-center md:justify-start" data-aos="fade-right">
                    <img src={BoxImg} alt="Inner Strengths Box" className="w-full max-w-[320px] md:max-w-[420px] h-auto drop-shadow-xl" />
                </div>
                <div className="flex-1 text-center md:text-left" data-aos="fade-left">
                    <h1 className="font-[var(--font-heading)] text-[#F5A623] text-2xl md:text-5xl mb-2 leading-tight tracking-wide">
                        INNER STRENGTHS<br className="hidden md:block" /> THAT GUIDE.
                    </h1>
                    <h2 className="font-[var(--font-heading)] text-[#00E5FF] text-2xl md:text-5xl mb-6 md:mb-8 leading-tight tracking-wide">
                        LITERACY SKILLS<br className="hidden md:block" /> THAT EMPOWER.
                    </h2>
                    <p className="text-base md:text-lg font-[var(--font-accent)] leading-relaxed text-white max-w-lg mx-auto md:mx-0 opacity-90">
                        At The Starry Path, children grow inner strengths through the <span className="font-bold">Inner Stars Program</span> and receive targeted literacy support through <span className="font-bold">Learning Stars</span>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProgramsHero;
