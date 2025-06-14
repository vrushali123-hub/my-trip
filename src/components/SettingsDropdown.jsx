

import React, { useState } from 'react';

const SettingsDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('in');
  const [selectedCurrency, setSelectedCurrency] = useState('INR');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleApply = () => {
    alert(`Country: ${selectedCountry}, Currency: ${selectedCurrency}, Language: ${selectedLanguage}`);
    setShowDropdown(false);
  };

  const countries = [
    { code: 'in', name: 'India' },
    { code: 'us', name: 'United States' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'au', name: 'Australia' },
    { code: 'ca', name: 'Canada' }
  ];

  const currencies = ['INR', 'USD', 'EUR', 'AUD', 'CAD'];

  const languages = ['English', 'Hindi', 'French'];

  return (
    <div className="settings-dropdown position-relative">
      <div
        className="d-flex align-items-center cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
        style={{ cursor: 'pointer' }}
      >
        <img
          src={`https://flagcdn.com/w40/${selectedCountry}.png`}
          alt="flag"
          style={{ height: '18px', marginRight: '6px' }}
        />
        <span style={{ fontSize: '14px' }}>
          {countries.find(c => c.code === selectedCountry)?.name} | {selectedLanguage}
        </span>
      </div>

      {showDropdown && (
        <div className="dropdown-panel shadow-sm">
          <h6>Country</h6>
          {countries.map((country) => (
            <label key={country.code}>
              <input
                type="radio"
                value={country.code}
                checked={selectedCountry === country.code}
                onChange={() => setSelectedCountry(country.code)}
              />
              <img
                src={`https://flagcdn.com/w20/${country.code}.png`}
                alt={country.name}
                style={{ height: '12px', marginRight: '6px' }}
              />
              {country.name}
            </label>
          ))}

          <h6 className="mt-2">Currency</h6>
          {currencies.map((curr) => (
            <label key={curr}>
              <input
                type="radio"
                value={curr}
                checked={selectedCurrency === curr}
                onChange={() => setSelectedCurrency(curr)}
              />
              {curr}
            </label>
          ))}

          <h6 className="mt-2">Language</h6>
          {languages.map((lang) => (
            <label key={lang}>
              <input
                type="radio"
                value={lang}
                checked={selectedLanguage === lang}
                onChange={() => setSelectedLanguage(lang)}
              />
              {lang}
            </label>
          ))}

          <button className="apply-btn" onClick={handleApply}>Apply</button>
        </div>
      )}
    </div>
  );
};

export default SettingsDropdown;














