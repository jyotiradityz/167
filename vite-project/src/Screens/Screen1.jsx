import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import './Screen1.css';

const Screen1 = () => {
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [leadSource, setLeadSource] = useState('');

  const handleNext = () => {
    // Handle the next button click, e.g., move to the next step
    console.log({
      companyName,
      industry,
      leadSource
    });
  };

  return (
    <div className="screen1-container">
      <h1>Onboarding Getting Started!!</h1>
      <p>Provide us with details so that we can give you tailored solutions</p>
      <form>
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Which Industry <FaInfoCircle className="info-icon" /></label>
          <input
            type="text"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Lead Source</label>
          <input
            type="text"
            value={leadSource}
            onChange={(e) => setLeadSource(e.target.value)}
          />
        </div>
        <p className="info-text">
          <FaInfoCircle className="info-icon" />
          Mention at least 5 platforms from where you want to get lead sources. Platforms like Facebook, Instagram, etc.
        </p>
        <button type="button" onClick={handleNext} className="next-button">Next</button>
      </form>
    </div>
  );
};

export default Screen1;
