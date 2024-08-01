/* eslint-disable react/prop-types */

import useStore from "../useStore";

const TraditionalMethods = () => {
  //
  // Destructure state held in zustand store
  const {
    gram,
    mannitol,
    catalase,
    step,
    updateTraditionalState,
    pcr,
    maldi,
    updateMolecularState,
  } = useStore();

  const handleChange = (assay, value) => {
    //
    updateTraditionalState(assay, value);
    // Disable molecular methods
    if (assay === "gram") {
      updateMolecularState("pcr", "");
      updateMolecularState("maldi", "");
    }
  };

  // Render
  return (
    // Add 'disabled' class if pcr or maldi is selected
    <div
      className={`method-category ${
        pcr !== "" || maldi !== "" ? "disabled" : ""
      }`}>
      {/* Header */}
      <div className="method-category-header">
        <h3>Traditional Methods</h3>
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
          className="lucide lucide-microscope">
          <path d="M6 18h8" />
          <path d="M3 22h18" />
          <path d="M14 22a7 7 0 1 0 0-14h-1" />
          <path d="M9 14h2" />
          <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
          <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
        </svg>
      </div>

      <div className="radios-column">
        {/* GRAM STAIN */}
        <fieldset className={step >= 1 ? "" : "disabled"}>
          <legend>GRAM STAIN</legend>

          <label>
            <input
              type="radio"
              name="gram"
              value="negative"
              checked={gram === "negative"}
              onChange={(e) => handleChange("gram", e.target.value)}
            />
            <span>Negative</span>
          </label>

          <label>
            <input
              type="radio"
              name="gram"
              value="positive"
              checked={gram === "positive"}
              onChange={(e) => handleChange("gram", e.target.value)}
            />
            <span>Positive</span>
          </label>
        </fieldset>

        {/* MSA */}
        <fieldset className={step >= 2 ? "" : "disabled"}>
          <legend>MANNITOL SALT AGAR</legend>

          <label>
            <input
              type="radio"
              name="mannitol"
              value="no-growth"
              checked={mannitol === "no-growth"}
              onChange={(e) => handleChange("mannitol", e.target.value)}
            />
            <span>No growth</span>
          </label>

          <label>
            <input
              type="radio"
              name="mannitol"
              value="red"
              checked={mannitol === "red"}
              onChange={(e) => handleChange("mannitol", e.target.value)}
            />
            <span>Red, growth</span>
          </label>

          <label>
            <input
              type="radio"
              name="mannitol"
              value="yellow"
              checked={mannitol === "yellow"}
              onChange={(e) => handleChange("mannitol", e.target.value)}
            />
            <span>Yellow</span>
          </label>
        </fieldset>

        {/* CATALASE */}
        <fieldset className={step >= 3 ? "" : "disabled"}>
          <legend>CATALASE</legend>

          <label>
            <input
              type="radio"
              name="catalase"
              value="negative"
              checked={catalase === "negative"}
              onChange={(e) => handleChange("catalase", e.target.value)}
            />
            <span>Negative</span>
          </label>

          <label>
            <input
              type="radio"
              name="catalase"
              value="positive"
              checked={catalase === "positive"}
              onChange={(e) => handleChange("catalase", e.target.value)}
            />
            <span>Positive</span>
          </label>
        </fieldset>
        {/*  */}
      </div>
    </div>
  );
};

export default TraditionalMethods;
