import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import styles from './App.module.css';
import WelcomeSection from './components/WelcomeSection';
import SectionBoxes from './components/SectionsBoxes';
import ContactSection from './components/ContactSection';
import AboutMe from './pages/AboutMe';

// const router = createBrowserRouter([
//   {
//     path: '/', element: <AboutMe />
//   }
// ]);

const App: React.FC = () => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  const toggleOverlay: () => void = () => {
    setIsOverlayActive(!isOverlayActive);
  };

  useEffect(() => {
    if (isOverlayActive) {
      document.body.classList.add(styles.overlay_active);
    } else {
      document.body.classList.remove(styles.overlay_active);
    }
  }, [isOverlayActive]);

  return (
    <Router>
      <header className={styles.header}>
        <NavigationBar toggleOverLay={toggleOverlay} />
      </header>
      <main>
        <WelcomeSection />
        <SectionBoxes />
        <ContactSection />
        <Routes>
          <Route path='/about-me' element={<AboutMe />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
