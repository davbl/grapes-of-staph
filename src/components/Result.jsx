/* eslint-disable react/prop-types */

import useStore from "../useStore";

const resultLookup = {
  "pcr:negative": "No",
  "pcr:positive": "Yes",
  "maldi:negative": "No",
  "maldi:positive": "Yes",
  "gram:negative": "No",
  "gram:positive,mannitol:no-growth": "No",
  "gram:positive,mannitol:red,catalase:negative": "No",
  "gram:positive,mannitol:red": "Unlikely",
  "gram:positive,mannitol:yellow,catalase:positive": "Likely",
  "gram:positive,mannitol:yellow,catalase:negative": "Maybe",
  "gram:positive,mannitol:yellow": "Likely",
};

const Result = () => {
  //
  // Destructure radio selections object from zustand store
  const { pcr, maldi, gram, mannitol, catalase } = useStore();

  // Calculate result from radio selections
  const calculateResult = () => {
    // Create an array that we can compare with the lookup object
    const key = [
      // Example: if gram, append "gram":value to array
      gram && `gram:${gram}`,
      mannitol && `mannitol:${mannitol}`,
      catalase && `catalase:${catalase}`,
      pcr && `pcr:${pcr}`,
      maldi && `maldi:${maldi}`,
    ]
      // Remove falsy values
      .filter(Boolean)
      .join(",");

    // iterate over lookup object
    for (let assayKey in resultLookup) {
      if (key.includes(assayKey)) {
        // return result value
        return resultLookup[assayKey];
      }
    }

    return "Maybe";
  };

  const result = calculateResult();

  // Render
  return (
    <>
      <ol>
        {/* Add appropriate color-coding */}
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
