import useStore from "../useStore";

const ResetBtn = () => {
  //
  const resetSelections = useStore((state) => state.resetSelections);

  const handleReset = () => {
    resetSelections();
  };

  // Render
  return (
    <button type="button" className="reset-btn" onClick={handleReset}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-rotate-ccw">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
      </svg>
      Reset
    </button>
  );
};

export default ResetBtn;
