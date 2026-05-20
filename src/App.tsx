import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';

// Individual Service Pages
import DigitalTransformationPage from './pages/services/DigitalTransformationPage';
import DataEngineeringPage from './pages/services/DataEngineeringPage';
import AnalyticsIntelligencePage from './pages/services/AnalyticsIntelligencePage';
import AISolutionsPage from './pages/services/AISolutionsPage';
import StaffAugmentationPage from './pages/services/StaffAugmentationPage';
import ManagedServicesPage from './pages/services/ManagedServicesPage';
import OffshoreDevelopmentPage from './pages/services/OffshoreDevelopmentPage';
import GlobalCapabilityPage from './pages/services/GlobalCapabilityPage';

// Individual Industry Pages
import HealthcarePage from './pages/industries/HealthcarePage';
import FinancialServicesPage from './pages/industries/FinancialServicesPage';
import ManufacturingPage from './pages/industries/ManufacturingPage';
import InsuranceServicesPage from './pages/industries/InsuranceServicesPage';
import EducationPage from './pages/industries/EducationPage';
import ProfessionalServicesPage from './pages/industries/ProfessionalServicesPage';
import RetailPage from './pages/industries/RetailPage';
import GovernmentPage from './pages/industries/GovernmentPage';

function App() {
  return (
 <Router>
      <div className="min-h-screen bg-white font-['Inter'] font-light text-gray-600 overflow-x-hidden">
        
        <Header />

        <main>
          <Routes>

            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Service Routes */}
            <Route
              path="/services/digital-transformation"
              element={<DigitalTransformationPage />}
            />

            <Route
              path="/services/data-engineering"
              element={<DataEngineeringPage />}
            />

            <Route
              path="/services/analytics-intelligence"
              element={<AnalyticsIntelligencePage />}
            />

            <Route
              path="/services/ai-solutions"
              element={<AISolutionsPage />}
            />

            <Route
              path="/services/staff-augmentation"
              element={<StaffAugmentationPage />}
            />

            <Route
              path="/services/managed-services"
              element={<ManagedServicesPage />}
            />

            <Route
              path="/services/offshore-development"
              element={<OffshoreDevelopmentPage />}
            />

            <Route
              path="/services/global-capability"
              element={<GlobalCapabilityPage />}
            />

            {/* Industry Routes */}
            <Route
              path="/industries/healthcare"
              element={<HealthcarePage />}
            />

            <Route
              path="/industries/financial-services"
              element={<FinancialServicesPage />}
            />

            <Route
              path="/industries/manufacturing"
              element={<ManufacturingPage />}
            />

            <Route
              path="/industries/insurance-services"
              element={<InsuranceServicesPage />}
            />

            <Route
              path="/industries/education"
              element={<EducationPage />}
            />

            <Route
              path="/industries/professional-services"
              element={<ProfessionalServicesPage />}
            />

            <Route
              path="/industries/retail"
              element={<RetailPage />}
            />

            <Route
              path="/industries/government"
              element={<GovernmentPage />}
            />

          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App;