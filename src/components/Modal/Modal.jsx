import React, { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ onClick, url, alt }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClick]);

  const handleBackdpropClick = event => {
    if (event.currentTarget === event.target) {
      onClick();
    }
  };

  return (
    <div className={styles.Overlay} onClick={handleBackdpropClick}>
      <div className={styles.Modal}>
        <img src={url} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
