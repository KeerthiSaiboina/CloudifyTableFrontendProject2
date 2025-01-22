import React, { useState } from "react";
import SingleSelectDropdown from "./SingleSelectDropdown";
import MultiSelectDropdown from "./MultiSelectDropdown";

const staticOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
const multiOptions = ["Multi 1", "Multi 2", "Multi 3"];

function Table() {
  const [rows, setRows] = useState([{ single: "", multi: [] }]);
  const [usedOptions, setUsedOptions] = useState([]);

  const handleAddRow = () => {
    setRows([...rows, { single: "", multi: [] }]);
  };

  const handleSingleChange = (value, index) => {
    const updatedRows = [...rows];
    updatedRows[index].single = value;
    setRows(updatedRows);
    setUsedOptions([...usedOptions, value]);
  };

  const handleMultiChange = (value, index) => {
    const updatedRows = [...rows];
    updatedRows[index].multi = value;
    setRows(updatedRows);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Label 1</th>
            <th>Label 2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <SingleSelectDropdown
                  options={staticOptions.filter(
                    (opt) => !usedOptions.includes(opt)
                  )}
                  value={row.single}
                  onChange={(value) => handleSingleChange(value, index)}
                />
              </td>
              <td>
                <MultiSelectDropdown
                  options={multiOptions}
                  selectedValues={row.multi}
                  onChange={(value) => handleMultiChange(value, index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow} className="add-row-button">
        Add New Row
      </button>
    </div>
  );
}

export default Table;
