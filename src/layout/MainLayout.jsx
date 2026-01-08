import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const MainLayout = ({ children }) => {
    return (
        <div className="App" style={{ background: 'transparent' }}>
            <Navbar />
            <main style={{ background: 'transparent' }}>
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default MainLayout;

