import React from 'react';
import { Hero } from '../components/sections/Hero';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { FeaturedServices } from '../components/sections/FeaturedServices';
import { HomeCTA } from '../components/sections/HomeCTA';

export default function Home() {
    return (
        <>
            <Hero />
            <WhyChooseUs />
            <FeaturedServices />
            <HomeCTA />
        </>
    );
}
