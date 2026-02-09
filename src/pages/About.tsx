import React from 'react';
import { About as AboutSection } from '../components/sections/About';
import { Stats } from '../components/sections/Stats';
import { Methodology } from '../components/sections/Methodology';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';

export default function About() {
    return (
        <>
            <AboutSection />
            <Stats />
            <Methodology />
            <Testimonials />
            <FAQ />
        </>
    );
}
