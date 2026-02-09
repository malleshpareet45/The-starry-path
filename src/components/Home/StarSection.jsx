import React from 'react';
import Star from '../../assets/images/Homepage/Star.svg';

const StarSection = () => {
    return (
        <section className="bg-transparent py-12 px-4 max-w-[1200px] mx-auto text-left relative">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">

                {/* Left: Star Image */}
                <div className="flex-1 flex justify-center md:justify-end" data-aos="fade-right">
                    <img
                        src={Star}
                        alt="Star Graphic"
                        className="w-[300px] md:w-[400px] object-contain"
                    />
                </div>

                {/* Right: Text Content */}
                <div className="flex-1 text-left" data-aos="fade-left">
                    <h2 className="text-[#0d2b45] font-[var(--font-heading)] text-3xl md:text-4xl mb-6 uppercase leading-tight">
                        WHAT CHILDREN LEARN<br />(AGES 5-12)
                    </h2>
                    <ul className="space-y-4 text-gray-500 font-[var(--font-accent)] text-lg">
                        <li className="flex items-start gap-3">
                            <span className="text-gray-400 text-sm mt-1.5">•</span>
                            <span>Respond when things feel hard</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-gray-400 text-sm mt-1.5">•</span>
                            <span>Keep trying when learning is challenging</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-gray-400 text-sm mt-1.5">•</span>
                            <span>Build and maintain healthy relationships</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-gray-400 text-sm mt-1.5">•</span>
                            <span>Make thoughtful choices</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-gray-400 text-sm mt-1.5">•</span>
                            <span>Develop habits of mind that support long-term learning</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default StarSection;
