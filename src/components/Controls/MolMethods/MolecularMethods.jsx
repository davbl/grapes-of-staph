/* eslint-disable react/prop-types */

import useStore from "../../../useStore";

const MolecularMethods = () => {
  //
  // Destructure state held in zustand store
  const { pcr, maldi, updateMolecularState, gram, updateTraditionalState } =
    useStore();

  const handleChange = (assay, value) => {
    //
    updateMolecularState(assay, value);
    // Disable the second assay
    updateMolecularState(assay === "pcr" ? "maldi" : "pcr", "disabled");
    // Disable traditional methods
    updateTraditionalState("gram", "");
  };

  // Render
  return (
    // if gram, add class 'disabled'
    <div className={`method-category ${gram ? "disabled" : ""}`}>
      {/* Header */}
      <div className="method-category-header">
        {/* Not an imported lucide icon due to custom rotation */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.0684 16.4297H13.282"
            stroke="#5D5C66"
            strokeWidth="2.08705"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.11695 7.57324H5.90332"
            stroke="#5D5C66"
            strokeWidth="2.08705"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.42669 2.4092C4.57426 5.21025 5.51653 7.2151 6.77756 8.90267"
            stroke="#5D5C66"
            strokeWidth="2.08705"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.8057 7.57324H13.2814"
            stroke="#5D5C66"
            strokeWidth="2.08705"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.85527 3.88379L4.58887 3.88379"
            stroke="#5D5C66"
            strokeWidth="2.08705"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.42726 21.5944C4.91942 12.2475 14.2654 11.756 14.7575 2.40912"
            stroke="#5D5C66"
            strokeWidth="2.08705"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.2822 3.88379L14.5971 3.88379"
            stroke="#5D5C66"
            strokeWidth="2.08705"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.58887 20.1182L5.90376 20.1182"
            stroke="#5D5C66"
            strokeWidth="2.08705"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.90332 16.4297H7.37907"
            stroke="#5D5C66"
            strokeWidth="2.08705"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.3301 20.1182L14.5965 20.1182"
            stroke="#5D5C66"
            strokeWidth="2.08705"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.7571 21.5931C14.6095 18.7921 13.6672 16.7872 12.4062 15.0996"
            stroke="#5D5C66"
            strokeWidth="2.08705"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h2>Molecular Methods</h2>
        <div className="separator"></div>
      </div>

      <div className="radios-column">
        {/* PCR */}
        <fieldset className={pcr === "disabled" ? "disabled" : ""}>
          <legend>(Q)PCR</legend>

          <label>
            <input
              type="radio"
              name="pcr"
              value="negative"
              checked={pcr === "negative"}
              onChange={(e) => handleChange("pcr", e.target.value)}
            />
            <span>− Neg</span>
          </label>

          <label>
            <input
              type="radio"
              name="pcr"
              value="positive"
              checked={pcr === "positive"}
              onChange={(e) => handleChange("pcr", e.target.value)}
            />
            <span>+ Pos</span>
          </label>
        </fieldset>

        {/* MALDI */}
        <fieldset className={maldi === "disabled" ? "disabled" : ""}>
          <legend>MALDI-TOF MS</legend>

          <label>
            <input
              type="radio"
              name="maldi"
              value="negative"
              checked={maldi === "negative"}
              onChange={(e) => handleChange("maldi", e.target.value)}
            />
            <span>− Neg</span>
          </label>

          <label>
            <input
              type="radio"
              name="maldi"
              value="positive"
              checked={maldi === "positive"}
              onChange={(e) => handleChange("maldi", e.target.value)}
            />
            <span>+ Pos</span>
          </label>
        </fieldset>
        {/*  */}
      </div>
    </div>
  );
};

export default MolecularMethods;
