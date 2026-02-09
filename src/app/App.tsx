import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import ScrollToTop from '../components/layout/ScrollToTop';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Team from '../pages/Team';
import Contact from '../pages/Contact';

import { PageLoader } from '../components/ui/PageLoader';

function App() {
    return (
        <Router>
            <PageLoader />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="nosotros" element={<About />} />
                    <Route path="servicios" element={<Services />} />
                    <Route path="equipo" element={<Team />} />
                    <Route path="contacto" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;