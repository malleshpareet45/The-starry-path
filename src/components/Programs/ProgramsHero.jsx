import React from 'react';
import BoxImg from '../../assets/images/Programs/Box.svg';

const ProgramsHero = () => {
    return (
        <section className="max-w-[1280px] mx-auto mt-6 px-4">
            <div className="bg-[#002147] text-white rounded-[40px] py-12 md:py-20 px-8 md:px-16 flex flex-col md:flex-row items-center gap-8 md:gap-16 shadow-2xl">
                <div className="flex-1 w-full flex justify-center md:justify-start" data-aos="fade-right">
                    <img src={BoxImg} alt="Inner Strengths Box" className="w-full max-w-[420px] h-auto" />
                </div>
                <div className="flex-1 text-center md:text-left" data-aos="fade-left">
                    <h1 className="font-[var(--font-body)] font-bold text-[#F5A623] text-3xl md:text-5xl mb-2 leading-tight tracking-wide">
                        INNER STRENGTHS<br />THAT GUIDE.
                    </h1>
                    <h2 className="font-[var(--font-body)] font-bold text-[#00E5FF] text-3xl md:text-5xl mb-8 leading-tight tracking-wide">
                        LITERACY SKILLS<br />THAT EMPOWER.
                    </h2>
                    <p className="text-base md:text-lg font-[var(--font-accent)] leading-relaxed text-white max-w-lg mx-auto md:mx-0">
                        At The Starry Path, children grow inner strengths through the <span className="font-bold">Inner Stars Program</span> and receive targeted literacy support through <span className="font-bold">Learning Stars</span>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProgramsHero;
