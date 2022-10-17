import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/shared/logo.svg";
import { ReactComponent as BurgerMenu } from "../../assets/shared/icon-hamburger.svg";
import { useContext } from "react";
import { MenuContextStatus } from "../../App";
import { useMediaQuery } from "react-responsive";
import Menu from "../Menu/Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useContext(MenuContextStatus);

  const toggleStatus = () => setIsOpen(!isOpen);

  const isMobileSize = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <header>
      <div className={styles.logo}>
        {isMobileSize ? <Logo width="2.5rem" height="2.5rem" /> : <Logo />}
      </div>
      <div className={styles.line}>
        <span></span>
      </div>
      <div className={styles.menu}>
        <BurgerMenu className={styles.burgerMenu} onClick={toggleStatus} />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
