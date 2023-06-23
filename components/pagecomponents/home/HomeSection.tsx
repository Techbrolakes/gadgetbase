import React from 'react';
import HeroSection from './HeroSection';
import Categories from './Categories';
import ProductSections from './ProductSections';

const HomeSection: React.FC = () => {
    return (
        <div className="space-y-32">
            <HeroSection />
            <Categories />
            <ProductSections />
        </div>
    );
};

export default HomeSection;
