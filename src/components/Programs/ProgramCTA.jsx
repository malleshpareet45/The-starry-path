import React from 'react';
import WaveImg from '../../assets/images/Programs/Wave.svg';

const ProgramCTA = () => {
    return (
        <>
            <div className="w-full mt-4 mb-12">
                <img src={WaveImg} alt="Transition Wave" className="w-full h-auto" />
            </div>

            <div className="flex justify-center mb-24 px-4" data-aos="zoom-in">
                <button className="btn-join uppercase text-sm md:text-2xl px-6 py-4 md:px-16 md:py-5 w-full md:w-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300" style={{ background: 'linear-gradient(90deg, #E91E63 0%, #673AB7 100%)' }}>
                    START YOUR CHILD'S JOURNEY
                </button>
            </div>
        </>
    );
};

export default ProgramCTA;
