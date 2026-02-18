import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/programs.css';

// Import Components
import ProgramsHero from '../components/Programs/ProgramsHero';
import InnerStarsProgram from '../components/Programs/InnerStarsProgram';
import LearningStarsProgram from '../components/Programs/LearningStarsProgram';
import ProgramComparison from '../components/Programs/ProgramComparison';
import ProgramCTA from '../components/Programs/ProgramCTA';

const ProgramsPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="programs-page">
            <ProgramsHero />
            <InnerStarsProgram />
            <LearningStarsProgram />
            <ProgramComparison />
            <ProgramCTA />
        </div>
    );
};

export default ProgramsPage;
