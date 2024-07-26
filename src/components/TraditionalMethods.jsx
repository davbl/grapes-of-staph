/* eslint-disable react/prop-types */
const TraditionalMethods = ({ onChange }) => {
  // take assay and radio selection and pass to App.jsx
  const handleChange = (assay) => (event) => {
    onChange(assay, event.target.value);
  };

  // Render
  return (
    <>
      {/* <h3>Traditional Methods</h3> */}

      {/* Gram */}
      <fieldset>
        <legend>GRAM STAIN</legend>

        <label>
          <input
            type="radio"
            name="gram"
            value="negative"
            onChange={handleChange("gram")}
          />
          <span>Negative</span>
        </label>

        <label>
          <input
            type="radio"
            name="gram"
            value="positive"
            onChange={handleChange("gram")}
          />
          <span>Positive</span>
        </label>

        {/* Unknown is same as unselected */}
        <label>
          <input
            type="radio"
            name="gram"
            value="unknown"
            onChange={handleChange("gram")}
          />
          <span>Unknown</span>
        </label>
      </fieldset>

      {/* Mannitol */}
      <fieldset>
        <legend>MANNITOL SALT AGAR</legend>

        <label>
          <input
            type="radio"
            name="mannitol"
            value="no-growth"
            onChange={handleChange("mannitol")}
          />
          <span>No growth</span>
        </label>

        <label>
          <input
            type="radio"
            name="mannitol"
            value="red"
            onChange={handleChange("mannitol")}
          />
          <span>Red, growth</span>
        </label>

        <div className="mannitol-wrap">
          <label>
            <input
              type="radio"
              name="mannitol"
              value="yellow"
              onChange={handleChange("mannitol")}
            />
            <span>Yellow</span>
          </label>

          <label>
            <input
              type="radio"
              name="mannitol"
              value="unknown"
              onChange={handleChange("mannitol")}
            />
            <span>Unknown</span>
          </label>
        </div>
      </fieldset>

      {/* Catalase */}
      <fieldset>
        <legend>CATALASE</legend>

        <label>
          <input
            type="radio"
            name="catalase"
            value="negative"
            onChange={handleChange("catalase")}
          />
          <span>Negative</span>
        </label>

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
            value="unknown"
            onChange={handleChange("catalase")}
          />
          <span>Unknown</span>
        </label>
      </fieldset>
    </>
  );
};

export default TraditionalMethods;
