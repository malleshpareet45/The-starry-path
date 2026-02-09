import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExploreSection from '../components/ExploreSection';

import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
    const location = useLocation();
    const showExploreSection = location.pathname !== '/programs';

    return (
        <div className="main-layout">
            <Header />
            <main className="content">
                {children}
            </main>
            {showExploreSection && <ExploreSection />}
            <Footer />
        </div>
    );
};

export default MainLayout;
