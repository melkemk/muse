'use client';

import React from 'react';
import './AboutUsPage.css';

const AboutUsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            {/* Header Section */}
            <header className="w-full bg-gradient-to-r from-blue-800 to-indigo-600 py-20 text-center fade-in">
                <h1 className="text-5xl font-bold text-white">
                    About Derartu Tulu Library
                </h1>
                <p className="text-lg text-gray-200 mt-4 max-w-xl mx-auto">
                    Empowering minds, fostering knowledge, and celebrating the spirit of learning.
                </p>
            </header>

            {/* About Section */}
            <section className="py-16 px-6 md:px-20 lg:px-40 bg-white text-center fade-in">
                <h2 className="text-4xl font-semibold text-blue-800 mb-6">
                    Our Mission
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                    The Derartu Tulu Library Management System is dedicated to fostering a love for reading and knowledge. Named in honor of Ethiopian Olympic champion Derartu Tulu, we aim to inspire learning, honor our culture, and provide easy access to books and resources for students, researchers, and readers of all backgrounds.
                </p>
            </section>

            {/* Values Section */}
            <section className="py-16 px-6 md:px-20 lg:px-40 bg-gray-100 fade-in">
                <h2 className="text-4xl font-semibold text-blue-800 mb-8 text-center">
                    Our Values
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <ValueCard
                        title="Accessibility"
                        description="We believe knowledge should be accessible to all, regardless of background or experience."
                    />
                    <ValueCard
                        title="Community"
                        description="Our library is a space to gather, learn, and grow together. We celebrate diversity and inclusion."
                    />
                    <ValueCard
                        title="Inspiration"
                        description="Named after Derartu Tulu, our library is inspired by the strength and perseverance of Ethiopian heritage."
                    />
                </div>
            </section>

            {/* History Section */}
            <section className="py-16 px-6 md:px-20 lg:px-40 bg-white text-center fade-in">
                <h2 className="text-4xl font-semibold text-blue-800 mb-6">
                    Our Journey
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                    Established in 2002, the Derartu Tulu Library was created to bridge the gap in access to quality reading materials in Ethiopia. Starting from humble beginnings, our library has grown to offer a diverse collection of resources across academic, historical, and fictional genres. We strive to create a vibrant learning environment that supports students, educators, and curious minds alike.
                </p>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-800 text-center text-white fade-in">
                <h2 className="text-3xl font-bold">
                    Join Us in Our Mission
                </h2>
                <p className="text-lg max-w-xl mx-auto mt-4">
                    Discover, learn, and grow with Derartu Tulu Library. Become a member, volunteer, or supporter and contribute to our vision of a knowledge-rich Ethiopia.
                </p>
                <button className="mt-8 px-8 py-3 bg-white text-blue-800 font-semibold rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300">
                    Join Our Community
                </button>
            </section>
        </div>
    );
};

// Reusable card component for Values section
interface ValueCardProps {
    title: string;
    description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs text-center transform hover:scale-105 transition-transform duration-300 fade-in">
        <h3 className="text-2xl font-semibold text-blue-800 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
    </div>
);

export default AboutUsPage;
