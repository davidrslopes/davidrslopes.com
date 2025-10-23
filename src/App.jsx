import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { useLanguage } from './hooks/useLanguage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

function App() {
  const { t } = useLanguage();

  useEffect(() => {
    // Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-ESGBJG0XRJ';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ESGBJG0XRJ');
    `;
    document.head.appendChild(script2);

    // Set document metadata
    document.title = 'Web Developer 👍 David RS Lopes';
    
    // Add Google Fonts
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'anonymous';
    document.head.appendChild(link2);

    const link3 = document.createElement('link');
    link3.href = 'https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Noto+Sans+Display:wght@300&display=swap';
    link3.rel = 'stylesheet';
    document.head.appendChild(link3);
  }, []);

  return <Hero translations={t} />;
}

export default App;
