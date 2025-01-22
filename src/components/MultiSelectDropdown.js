import React, { useState } from "react";

function MultiSelectDropdown({ options, selectedValues, onChange }) {
  const [customOptions, setCustomOptions] = useState([...options]);

  const handleAddOption = () => {
    const newOption = prompt("Enter a new option:");
    if (newOption && !customOptions.includes(newOption)) {
      setCustomOptions([...customOptions, newOption]);
    }
  };

  const handleSelectChange = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    onChange(value);
  };

  return (
    <div className="multi-select-container">
      <select multiple value={selectedValues} onChange={handleSelectChange}>
        {customOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button onClick={handleAddOption} className="add-option-button">
        + Add Option
      </button>
    </div>
  );
}

export default MultiSelectDropdown;
