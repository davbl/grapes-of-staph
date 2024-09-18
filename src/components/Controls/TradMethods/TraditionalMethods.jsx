/* eslint-disable react/prop-types */

import useStore from "../../../useStore";
import { Microscope } from "lucide-react";

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
        <Microscope size={24} color="currentColor" strokeWidth={2} />
        <h2>Traditional Methods</h2>
        <div className="separator"></div>
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
            <span>− Neg</span>
          </label>

          <label>
            <input
              type="radio"
              name="gram"
              value="positive"
              checked={gram === "positive"}
              onChange={(e) => handleChange("gram", e.target.value)}
            />
            <span>+ Pos</span>
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
            <span>− No growth</span>
          </label>

          <label>
            <input
              type="radio"
              name="mannitol"
              value="red"
              checked={mannitol === "red"}
              onChange={(e) => handleChange("mannitol", e.target.value)}
            />
            <span>± Red, growth</span>
          </label>

          <label>
            <input
              type="radio"
              name="mannitol"
              value="yellow"
              checked={mannitol === "yellow"}
              onChange={(e) => handleChange("mannitol", e.target.value)}
            />
            <span>+ Yellow</span>
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
            <span>− Neg</span>
          </label>

          <label>
            <input
              type="radio"
              name="catalase"
              value="positive"
              checked={catalase === "positive"}
              onChange={(e) => handleChange("catalase", e.target.value)}
            />
            <span>+ Pos</span>
          </label>
        </fieldset>
        {/*  */}
      </div>
    </div>
  );
};

export default TraditionalMethods;
