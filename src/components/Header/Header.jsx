import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { useContext } from "react";
import { DonationContext } from "../../contexts/DonationContext";

const Header = () => {
  const { donated } = useContext(DonationContext);
  const donator = JSON.parse(localStorage.getItem("Donation Info"));
  console.log(donator);
  console.log(donated);

  return (
    <header className={styles.header}>
      <Logo />

      <p className={styles.header__text}>
        Thank you, <strong>{donator.name}</strong>, for your {donator.sum}{" "}
        donation!
      </p>

      <Navigation />
    </header>
  );
};

export default Header;
