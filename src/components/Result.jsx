const Result = (radioSelections) => {
  // Result color-coding:
  // if at least one of the characteristics is negative, result is "No"
  // if all characteristics are positive, result is "Yes"
  // else result is "Possibly"
  const getResult = () => {
    // destructure radio selections object
    const { gram, mannitol, catalase } = radioSelections;
    if (
      gram === "negative" ||
      mannitol === "negative" ||
      catalase === "negative"
    ) {
      return "No";
    } else if (
      gram === "positive" &&
      mannitol === "positive" &&
      catalase === "positive"
    ) {
      return "Yes";
    } else {
      return "Possibly";
    }
  };

  const result = getResult();

  // HTML
  return (
    <>
      <ol>
        <li className={result === "No" ? "red" : ""}>No</li>
        <li className={result === "Possibly" ? "blue" : ""}>Possibly</li>
        <li className={result === "Yes" ? "green" : ""}>Yes</li>
      </ol>
    </>
  );
};

export default Result;
