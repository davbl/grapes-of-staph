/* eslint-disable react/prop-types */
const Result = ({ radioSelections }) => {
  // Calculate result and send for color-coding
  const calculateResult = () => {
    // destructure radio selections object
    const { gram, mannitol, catalase } = radioSelections;
    if (
      gram === "negative" ||
      catalase === "negative" ||
      mannitol === "no-growth"
    ) {
      return "No";
    } else if (gram === "positive" && catalase === "positive") {
      if (mannitol === "yellow") {
        return "Likely";
      } else if (mannitol === "red") {
        return "Unlikely";
      } else {
        return "Maybe";
      }
    } else {
      return "Maybe";
    }
  };

  const result = calculateResult();

  // Render
  return (
    <>
      <ol>
        {/* add appropriate color-coding */}
        <li className={result === "No" ? "no" : ""}>No</li>
        <li className={result === "Unlikely" ? "unlikely" : ""}>Unlikely</li>
        <li className={result === "Maybe" ? "maybe" : ""}>Maybe</li>
        <li className={result === "Likely" ? "likely" : ""}>Likely</li>
        <li className={result === "Yes" ? "yes" : ""}>Yes</li>
      </ol>
    </>
  );
};

export default Result;
