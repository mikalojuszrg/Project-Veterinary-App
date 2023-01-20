import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div>
      <img
        className={styles.logo}
        src="https://logos-world.net/wp-content/uploads/2021/09/Orange-Emblem.png"
        alt="logo"
      />
    </div>
  );
};

export default Logo;
