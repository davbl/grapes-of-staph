/* eslint-disable react/prop-types */

import useStore from "../useStore";

const Result = () => {
  //
  // Destructure radio selections object from zustand store
  const { gram, mannitol, catalase } = useStore();

  // Calculate result from radio selections
  const calculateResult = () => {
    //
    // Gram neg, step 1
    if (gram === "negative") {
      return "No";
    }
    // Gram pos, step 1
    if (gram === "positive") {
      // MSA no-growth, step 2
      if (mannitol === "no-growth") {
        return "No";
      }
      // MSA red and catalase neg, step 3
      // has to be before MSA red, step 2
      if (mannitol === "red" && catalase === "negative") {
        return "No";
      }
      // MSA red, step 2
      if (mannitol === "red") {
        return "Unlikely";
      }
      // MSA yellow and catalase pos, step 3
      if (mannitol === "yellow" && catalase === "positive") {
        return "Likely";
      }
      // MSA yellow and catalase neg, step 3
      if (mannitol === "yellow" && catalase === "negative") {
        return "Maybe";
      }
      // MSA yellow, step 2
      if (mannitol === "yellow") {
        return "Likely";
      }
    }
    return "Maybe";
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
