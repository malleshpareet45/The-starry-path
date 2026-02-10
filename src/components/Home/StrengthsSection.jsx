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
        <section className="py-12 md:py-20 px-4 max-w-[1200px] mx-auto text-center">
            <h2 className="text-2xl md:text-[2.5rem] text-[var(--color-primary-blue)] mb-4 uppercase font-[var(--font-heading)] leading-tight" data-aos="fade-up">
                SIX ESSENTIAL STRENGTHS<br />THAT SHAPE CHARACTER
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 font-[var(--font-accent)]" data-aos="fade-up" data-aos-delay="100">
                Values of life that define thoughts and actions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-start" data-aos="fade-up" data-aos-delay="200">
                {strengths.map((s, index) => (
                    <div
                        key={index}
                        className="flip-card mx-auto w-full max-w-[350px]"
                        style={{ perspective: '1000px' }}
                    >
                        <div className="flip-card-inner relative w-full h-full transition-transform duration-700 ease-in-out" style={{ transformStyle: 'preserve-3d' }}>
                            {/* Front of card */}
                            <div
                                className="flip-card-front relative w-full h-auto"
                                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                            >
                                <img
                                    src={s.img}
                                    alt={s.title}
                                    className="w-full h-auto block drop-shadow-2xl"
                                />
                            </div>

                            {/* Back of card */}
                            <div
                                className="flip-card-back absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-6 rounded-2xl text-white shadow-2xl"
                                style={{
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden',
                                    transform: 'rotateY(180deg)',
                                    backgroundColor: s.bgColor
                                }}
                            >
                                <div className="text-center">
                                    <h3 className="text-xl font-bold font-[var(--font-heading)]">{s.description.split('\n')[0]}</h3>
                                    <p className="text-sm md:text-base font-[var(--font-body)] leading-relaxed mt-2">
                                        {s.description.split('\n')[1] || ""}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mb-8 md:mb-16 px-4" data-aos="zoom-in" data-aos-offset="100">
                <button className="btn-join uppercase text-sm md:text-2xl px-6 py-3 md:px-12 md:py-4 w-full md:w-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    HELP YOUR CHILD BUILD LIFELONG STRENGTHS
                </button>
            </div>

            <style>{`
                .flip-card:hover .flip-card-inner {
                    transform: rotateY(180deg);
                }
            `}</style>
        </section>
    );
};

export default StrengthsSection;
