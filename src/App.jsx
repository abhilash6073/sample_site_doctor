import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import BeforeAfter from './pages/BeforeAfter';
import Testimonials from './pages/Testimonials';
import VirtualConsult from './pages/VirtualConsult';
import Clinics from './pages/Clinics';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Disclaimer from './pages/Disclaimer';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/before-after" element={<BeforeAfter />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/virtual-consult" element={<VirtualConsult />} />
          <Route path="/clinics" element={<Clinics />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
