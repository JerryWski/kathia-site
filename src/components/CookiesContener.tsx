/* eslint-disable @typescript-eslint/restrict-template-expressions */
import './CookiesContener.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import scrollToTop from '../utils/ScrollToTop';

const CookiesContener: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (!localStorage.getItem('cookiesBannerDisplayed')) {
      const timer = setTimeout(() => {
        setIsActive(true);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  const handleAcceptClick: () => void = () => {
    setIsActive(false);
    localStorage.setItem('cookiesBannerDisplayed', 'true');
  };
  const handleRefuseClick: () => void = () => {
    setIsActive(false);
  };

  return (
    <section>
      <div className={`cookies_container ${isActive ? 'active' : ''}`}>
        <div className='cookies_wrapper'>
          <div className='cookies'>
            <h3 className='cookies_heading'>
              Korzystamy z ciasteczek cookies, aby świadczyć usługi na najwyższym
              poziomie
            </h3>
            <p className='cookies_text'>
              Klikając &apos;Akceptuję&apos; wyrażasz zgodę na wykorzystywanie
              przez nas plików cookies. Przeczytaj naszą{' '}
              <Link
                onClick={scrollToTop}
                className='cookies_link'
                to='/private-policy'
              >
                Polityka Prywatności
              </Link>.
            </p>
          </div>
          <div className='button-container'>
            <button
              role='button'
              onClick={handleAcceptClick}
              className='cookies_button'
            >
              Akceptuję
            </button>
            <button
              role='button'
              onClick={handleRefuseClick}
              className='cookies_button'
            >
              Nie, dziękuję
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiesContener;
