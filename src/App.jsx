import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Industries from './pages/Industries';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

// Service Pages
import MobileAppDevelopment from './pages/services/MobileAppDevelopment';
import WebAppDevelopment from './pages/services/WebAppDevelopment';
import CustomSoftware from './pages/services/CustomSoftware';
import EcommerceDevelopment from './pages/services/EcommerceDevelopment';
import ProjectRescue from './pages/services/ProjectRescue';
import DigitalMarketing from './pages/services/DigitalMarketing';

import usePageAnimations from './hooks/usePageAnimations';

function AppContent() {
  usePageAnimations();

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />

        {/* Individual Service Pages */}
        <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/services/web-app-development" element={<WebAppDevelopment />} />
        <Route path="/services/custom-software" element={<CustomSoftware />} />
        <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
        <Route path="/services/project-rescue" element={<ProjectRescue />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />

        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainLayout>
  );
}

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <AppContent />
    </Router>
  );
}

export default App;
