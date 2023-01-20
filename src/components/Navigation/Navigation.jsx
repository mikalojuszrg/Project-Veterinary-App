import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
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
