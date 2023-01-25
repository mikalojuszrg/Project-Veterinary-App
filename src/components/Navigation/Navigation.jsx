import { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

const Navigation = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <nav className={styles.container}>
      <ul className={darkMode ? styles.navigationLight : styles.navigationDark}>
        <Link to={"/"}>
          <li>Pets</li>
        </Link>
        <Link to={"/meds"}>
          <li>Medications</li>
        </Link>
      </ul>
      {darkMode ? (
        <FaSun
          className={styles.container__icon}
          onClick={() => toggleDarkMode()}
        />
      ) : (
        <FaMoon
          className={styles.container__icon}
          onClick={() => toggleDarkMode()}
        />
      )}
    </nav>
  );
};

export default Navigation;
