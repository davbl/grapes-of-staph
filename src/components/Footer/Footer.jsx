import "./footer.css";
import { SquareArrowOutUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // Render
  return (
    <footer>
      <div className="cell">
        <h3>Info</h3>
        <p>
          Grapes of Staph is a demo app, not a full-featured diagnostic tool.
        </p>
      </div>

      <div className="cell grid-end">
        <h3>Stack</h3>
        <p>Built with React, Vite, Zustand, and Figma.</p>
      </div>

      <div className="cell">
        <h3>Feedback</h3>
        <a href="https://forms.gle/XdAxz4bARDy2nqGy7" target="_blank">
          <p>Tell me what to improve</p>
          <SquareArrowOutUpRight
            size={12}
            color="currentColor"
            strokeWidth={2.25}
          />
        </a>
      </div>

      <div className="cell copyright grid-end">
        <a href="https://www.dnarna.co" target="_blank">
          <h3>
            <span>DNARNA.co</span>
          </h3>
        </a>
        <p>© {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
