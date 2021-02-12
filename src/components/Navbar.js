import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Reading List</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? "Logged In" : "Logged Out"}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
