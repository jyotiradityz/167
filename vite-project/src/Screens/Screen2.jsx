import React, { useState } from 'react';
import { FaUser, FaUsers, FaBuilding } from 'react-icons/fa';
import './Screen2.css';

const Screen2 = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    // Handle the next button click, e.g., move to the next step
    console.log({ selectedOption });
  };

  return (
    <div className="screen2-container">
      <h1>How are you planning to use our CRM?</h1>
      <p>We’ll streamline your setup experience accordingly.</p>
      <div className="options-container">
        <div
          className={`option-card ${selectedOption === 'myself' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('myself')}
        >
          <FaUser className="option-icon" />
          <h2>For myself</h2>
          <p>Boost your personal sales productivity.</p>
        </div>
        <div
          className={`option-card ${selectedOption === 'team' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('team')}
        >
          <FaUsers className="option-icon" />
          <h2>With my team</h2>
          <p>Collaborate seamlessly with your team.</p>
        </div>
        <div
          className={`option-card ${selectedOption === 'organization' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('organization')}
        >
          <FaBuilding className="option-icon" />
          <h2>With my organization</h2>
          <p>Empower your entire company with a centralized CRM platform.</p>
        </div>
      </div>
      <button type="button" onClick={handleNext} className="next-button">Next</button>
    </div>
  );
};

export default Screen2;
