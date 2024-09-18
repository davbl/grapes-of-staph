import "./footer.css";
import { SquareArrowOutUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // Render
  return (
    <footer>
      <div className="block info">
        <h4>Info</h4>
        <p>
          Grapes of Staph is a demo app, not a full-featured diagnostic tool.
        </p>
      </div>

      <div className="block">
        <h4>Feedback</h4>
        <a href="https://forms.gle/XdAxz4bARDy2nqGy7" target="_blank">
          <p>Tell me what to improve</p>
          <SquareArrowOutUpRight
            size={12}
            color="currentColor"
            strokeWidth={2.25}
          />
        </a>
      </div>

      <div className="block copyright">
        <a href="https://www.dnarna.co" target="_blank">
          <h4>
            <span>DNARNA.co</span>
          </h4>
        </a>
        <p>© {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
