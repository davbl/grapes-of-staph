/* eslint-disable react/prop-types */
const Controls = ({ onChange }) => {
  // take assay and radio selection and pass to App.jsx
  const handleChange = (assay) => (event) => {
    onChange(assay, event.target.value);
  };

  // Render
  return (
    <>
      {/* Gram */}
      <fieldset>
        <legend>GRAM STAIN</legend>

        <label>
          <input
            type="radio"
            name="gram"
            value="positive"
            onChange={handleChange("gram")}
          />
          <span>Positive</span>
        </label>

        <label>
          <input
            type="radio"
            name="gram"
            value="negative"
            onChange={handleChange("gram")}
          />
          <span>Negative</span>
        </label>
      </fieldset>

      {/* Mannitol */}
      <fieldset>
        <legend>MANNITOL SALT AGAR</legend>

        <label>
          <input
            type="radio"
            name="mannitol"
            value="positive"
            onChange={handleChange("mannitol")}
          />
          <span>Positive</span>
        </label>

        <label>
          <input
            type="radio"
            name="mannitol"
            value="negative"
            onChange={handleChange("mannitol")}
          />
          <span>Negative</span>
        </label>
      </fieldset>

      {/* Catalase */}
      <fieldset>
        <legend>CATALASE</legend>

        <label>
          <input
            type="radio"
            name="catalase"
            value="positive"
            onChange={handleChange("catalase")}
          />
          <span>Positive</span>
        </label>

        <label>
          <input
            type="radio"
            name="catalase"
            value="negative"
            onChange={handleChange("catalase")}
          />
          <span>Negative</span>
        </label>
      </fieldset>
    </>
  );
};

export default Controls;
