import React from 'react';
import WaveImg from '../../assets/images/Programs/Wave.svg';

const ProgramCTA = () => {
    return (
        <>
            <div className="w-full my-16">
                <img src={WaveImg} alt="Transition Wave" className="w-full h-auto" />
            </div>

            <div className="flex justify-center mb-24 px-6">
                <button className="bg-gradient-to-r from-[#E91E63] to-[#673AB7] hover:from-[#8BC34A] hover:to-[#03A9F4] text-white px-16 py-5 rounded-2xl font-[var(--font-heading)] text-2xl uppercase shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    START YOUR CHILD'S JOURNEY
                </button>
            </div>
        </>
    );
};

export default ProgramCTA;
