import React from 'react';
import HeroSection from './HeroSection';
import Categories from './Categories';

const HomeSection: React.FC = () => {
    return (
        <div className="space-y-32">
            <HeroSection />
            <Categories />
        </div>
    );
};

export default HomeSection;
