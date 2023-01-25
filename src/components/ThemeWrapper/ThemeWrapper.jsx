import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./ThemeWrapper.module.scss";

const cn = classNames.bind(styles);

const ThemeWrapper = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={
        darkMode
          ? cn(styles.wrapper, styles["wrapper--dark"])
          : cn(styles.wrapper, styles["wrapper--light"])
      }
    >
      {children}
    </div>
  );
};

export default ThemeWrapper;
