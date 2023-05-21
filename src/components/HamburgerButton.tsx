import React from 'react';
import './HamburgerButton.css';

interface BurgerMenuProps {
  isActive: boolean
  toggleActive: () => void
  toggleOverlay: () => void
}

const HamburgerButton: React.FC<BurgerMenuProps> = ({
  isActive,
  toggleActive,
  toggleOverlay
}) => {
  return (
    <button
      onClick={() => {
        toggleActive();
        toggleOverlay();
      }}
      className={`hamburger hamburger--collapse ${isActive ? 'is-active' : ''}`}
      type='button'
      title="Hamburger-button"
    >
      <span className='hamburger-box'>
        <span className='hamburger-inner'></span>
      </span>
    </button>
  );
};

export default HamburgerButton;
