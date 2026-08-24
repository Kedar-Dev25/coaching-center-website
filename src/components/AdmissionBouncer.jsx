import React from 'react';
import ReactDOM from 'react-dom';

const AdmissionBouncer = () => {
  if (typeof window === 'undefined') return null;

  return ReactDOM.createPortal(
    <div className="admission-badge-wrapper">
      <div className="admission-badge">
        <span className="live-dot"></span>
        <span className="badge-text">Admissions Open 2026</span>
      </div>
    </div>,
    document.body
  );
};

export default AdmissionBouncer;