import "./resetBtn.css";
import { RotateCcw } from "lucide-react";
import useStore from "../../../useStore";
import { useEffect } from "react";

const ResetBtn = () => {
  //
  const resetSelections = useStore((state) => state.resetSelections);

  // Add keydown listener for "R" key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === "r") {
        resetSelections();

        // Remove focus from any radio buttons
        const focusedElement = document.activeElement;
        if (focusedElement && focusedElement.type === "radio") {
          focusedElement.blur();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup listener when component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [resetSelections]);

  // Render
  return (
    <div className="reset-container">
      <p>
        Press <kbd>R</kbd>
      </p>
      <button
        type="button"
        className="reset-btn"
        onClick={resetSelections}
        aria-label="Reset selections">
        <RotateCcw size={13} color="currentColor" strokeWidth={2.8} />
        Reset
      </button>
    </div>
  );
};

export default ResetBtn;
