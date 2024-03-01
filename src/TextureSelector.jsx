import React from 'react';

const TextureSelector = ({ label, texture, options, onChange }) => {
  return (
    <div>
      <label>{label}:</label>
      <img src={texture} alt={`${label} Texture`} style={{ width: '50px', height: '50px' }} />
      <select value={texture} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TextureSelector;
