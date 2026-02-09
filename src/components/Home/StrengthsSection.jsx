import React, { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import BounceBack from '../../assets/images/Homepage/Bounce back.svg';
import StandTall from '../../assets/images/Homepage/Stand Tall.svg';
import ChooseKind from '../../assets/images/Homepage/Choose Kind.svg';
import KeepGoing from '../../assets/images/Homepage/Keep Going.svg';
import FindTheGood from '../../assets/images/Homepage/Feel The Good.svg';
import StayTrue from '../../assets/images/Homepage/Stay True.svg';

const StrengthsSection = () => {
    const [ref, isVisible] = useScrollAnimation(0.1);
    const strengths = [
        {
            img: BounceBack,
            title: "Bounce Back",
            description: "RESILIENCE\nLearn to overcome challenges and bounce back from setbacks with strength and determination.",
            bgColor: "#F5A623"
        },
        {
            img: StandTall,
            title: "Stand Tall",
            description: "COURAGE\nStand up for what's right and face fears with confidence and bravery.",
            bgColor: "#8BC34A"
        },
        {
            img: ChooseKind,
            title: "Choose Kind",
            description: "PERSEVERANCE\nKeep going even when things get tough, never giving up on your goals.",
            bgColor: "#FF5722"
        },
        {
            img: KeepGoing,
            title: "Keep Going",
            description: "KINDNESS AND EMPATHY\nShow compassion to others and understand their feelings and perspectives.",
            bgColor: "#673AB7"
        },
        {
            img: FindTheGood,
            title: "Find the Good",
            description: "GRATITUDE\nAppreciate the good things in life and express thankfulness.",
            bgColor: "#E91E63"
        },
        {
            img: StayTrue,
            title: "Stay True",
            description: "HONESTY AND INTEGRITY\nBe truthful and act with strong moral principles in all situations.",
            bgColor: "#4DB6AC"
        }
    ];

    return (
        <section className="py-20 px-4 max-w-[1200px] mx-auto text-center">
            <h2 className="text-[2rem] md:text-[2.5rem] text-[var(--color-primary-blue)] mb-4 uppercase font-[var(--font-heading)] leading-tight" data-aos="fade-up">
                SIX ESSENTIAL STRENGTHS<br />THAT SHAPE CHARACTER
            </h2>
            <p className="text-lg text-gray-600 mb-12 font-[var(--font-accent)]" data-aos="fade-up" data-aos-delay="100">
                Values of life that define thoughts and actions.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-12" data-aos="fade-up" data-aos-delay="200">
                {strengths.map((s, index) => (
                    <div
                        key={index}
                        className="flip-card h-[240px]"
                        style={{ perspective: '1000px' }}
                    >
                        <div className="flip-card-inner relative w-full h-full transition-transform duration-700 ease-in-out" style={{ transformStyle: 'preserve-3d' }}>
                            {/* Front of card */}
                            <div
                                className="flip-card-front absolute w-full h-full flex items-center justify-center bg-transparent"
                                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                            >
                                <img
                                    src={s.img}
                                    alt={s.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Back of card */}
                            <div
                                className="flip-card-back absolute w-full h-full flex flex-col items-center justify-center p-6 rounded-2xl text-white"
                                style={{
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden',
                                    transform: 'rotateY(180deg)',
                                    backgroundColor: s.bgColor
                                }}
                            >
                                <p className="text-lg font-[var(--font-heading)] whitespace-pre-line leading-relaxed">
                                    {s.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="btn-join uppercase" style={{ padding: '1rem 3rem', fontSize: '1.4rem' }} data-aos="zoom-in" data-aos-offset="100">
                HELP YOUR CHILD BUILD LIFELONG STRENGTHS
            </button>

            <style>{`
                .flip-card:hover .flip-card-inner {
                    transform: rotateY(180deg);
                }
            `}</style>
        </section>
    );
};

export default StrengthsSection;
