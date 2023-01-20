import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
