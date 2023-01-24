import { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

const Navigation = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <nav>
      {darkMode ? (
        <FaSun onClick={() => toggleDarkMode()} />
      ) : (
        <FaMoon onClick={() => toggleDarkMode()} />
      )}
      <ul className={styles.navigation}>
        <Link to={"/"}>
          <li className={styles.navigation__item}>Pets</li>
        </Link>
        <Link to={"/meds"}>
          <li className={styles.navigation__item}>Medications</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
