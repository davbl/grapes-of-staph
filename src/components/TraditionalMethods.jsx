/* eslint-disable react/prop-types */

import useStore from "../useStore";

const TraditionalMethods = () => {
  //
  // Destructure state held in zustand store
  const { gram, mannitol, catalase, step, updateSelection } = useStore();

  const handleChange = (assay, value) => {
    // Debugging
    // console.log(`Changing ${assay} to ${value}`);
    updateSelection(assay, value);
  };

  // Render
  return (
    <>
      {/* <h3>Traditional Methods</h3> TODO */}

      {/* GRAM STAIN */}
      <fieldset className={step >= 1 ? "enabled" : "disabled"}>
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
      <fieldset className={step >= 2 ? "enabled" : "disabled"}>
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
      <fieldset className={step >= 3 ? "enabled" : "disabled"}>
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
    </>
  );
};

export default TraditionalMethods;
