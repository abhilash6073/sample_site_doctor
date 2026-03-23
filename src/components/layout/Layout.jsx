import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MobileBottomBar from './MobileBottomBar';
import WhatsAppFloat from '../shared/WhatsAppFloat';
import ChatbotWidget from '../shared/ChatbotWidget';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileBottomBar />
      <WhatsAppFloat />
      <ChatbotWidget />
    </>
  );
}
