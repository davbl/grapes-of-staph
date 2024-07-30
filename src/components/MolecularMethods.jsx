/* eslint-disable react/prop-types */

import useStore from "../useStore";

const MolecularMethods = () => {
  //
  // Destructure state held in zustand store
  const { pcr, maldi, updateMolecularState } = useStore();

  const handleChange = (assay, value) => {
    // Debugging
    // console.log(`Changing ${assay} to ${value}`);
    updateMolecularState(assay, value);
  };

  // Render
  return (
    <div className="method-category">
      <div className="method-category-header">
        <h3>Molecular Methods</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#acaaad"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-dna">
          <path d="m10 16 1.5 1.5" />
          <path d="m14 8-1.5-1.5" />
          <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
          <path d="m16.5 10.5 1 1" />
          <path d="m17 6-2.891-2.891" />
          <path d="M2 15c6.667-6 13.333 0 20-6" />
          <path d="m20 9 .891.891" />
          <path d="M3.109 14.109 4 15" />
          <path d="m6.5 12.5 1 1" />
          <path d="m7 18 2.891 2.891" />
          <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
        </svg>
      </div>

      <div className="radios-column">
        {/* PCR */}
        <fieldset>
          <legend>(Q)PCR</legend>

          <label>
            <input
              type="radio"
              name="pcr"
              value="negative"
              checked={pcr === "negative"}
              onChange={(e) => handleChange("pcr", e.target.value)}
            />
            <span>Negative</span>
          </label>

          <label>
            <input
              type="radio"
              name="pcr"
              value="positive"
              checked={pcr === "positive"}
              onChange={(e) => handleChange("pcr", e.target.value)}
            />
            <span>Positive</span>
          </label>
        </fieldset>

        {/* MALDI */}
        <fieldset>
          <legend>MALDI-TOF MS</legend>

          <label>
            <input
              type="radio"
              name="maldi"
              value="negative"
              checked={maldi === "negative"}
              onChange={(e) => handleChange("maldi", e.target.value)}
            />
            <span>Negative</span>
          </label>

          <label>
            <input
              type="radio"
              name="maldi"
              value="positive"
              checked={maldi === "positive"}
              onChange={(e) => handleChange("maldi", e.target.value)}
            />
            <span>Positive</span>
          </label>
        </fieldset>
        {/*  */}
      </div>
    </div>
  );
};

export default MolecularMethods;
