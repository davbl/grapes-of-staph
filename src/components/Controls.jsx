const Controls = () => {
  // HTML
  return (
    <>
      {/* gram */}
      <fieldset>
        <legend>GRAM</legend>

        <label>
          <input type="radio" name="gram" value="positive" />
          <span>Positive</span>
        </label>

        <label>
          <input type="radio" name="gram" value="negative" />
          <span>Negative</span>
        </label>
      </fieldset>

      {/* mannitol */}
      <fieldset>
        <legend>MANNITOL</legend>

        <label>
          <input type="radio" name="mannitol" value="positive" />
          <span>Positive</span>
        </label>

        <label>
          <input type="radio" name="mannitol" value="negative" />
          <span>Negative</span>
        </label>
      </fieldset>

      {/* catalase */}
      <fieldset>
        <legend>CATALASE</legend>

        <label>
          <input type="radio" name="catalase" value="positive" />
          <span>Positive</span>
        </label>

        <label>
          <input type="radio" name="catalase" value="negative" />
          <span>Negative</span>
        </label>
      </fieldset>
    </>
  );
};

export default Controls;
