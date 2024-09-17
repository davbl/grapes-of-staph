import "./header.css";
import { Grape } from "lucide-react";

const Header = () => {
  // Render
  return (
    <header>
      <Grape size={18} color="#9E70CC" strokeWidth={2.25} />
      <h1>Grapes of Staph</h1>
    </header>
  );
};

export default Header;
