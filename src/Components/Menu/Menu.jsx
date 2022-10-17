import { NavLink } from "react-router-dom";
import styles from "./Menu.module.scss";
import { ReactComponent as MobileClose } from "../../assets/shared/icon-close.svg";
import { useContext } from "react";
import { MenuContextStatus } from "../../App";

const Menu = () => {

  const [ isOpen, setIsOpen ] = useContext(MenuContextStatus);

  const toggleStatus = () => setIsOpen(!isOpen);

  return (
    <div className={`${styles.menuContainer} ${isOpen ? styles.menuContainerShow : null}`}>
      <div className={styles.menuContainer__close}>
        <MobileClose onClick={toggleStatus}/>
      </div>
      <nav>
        <ul className={styles.linksContainer}>
          <li className={styles.listItem} onClick={toggleStatus}>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.inactiveLink
              }
            >
              <span className={styles.linkNumber}>00</span> HOME
            </NavLink>
          </li>
          <li className={styles.listItem} onClick={toggleStatus}>
            <NavLink
              to="/destinations"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.inactiveLink
              }
            >
              <span className={styles.linkNumber}>01</span> DESTINATION
            </NavLink>
          </li>
          <li className={styles.listItem} onClick={toggleStatus}>
            <NavLink
              to="/crew"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.inactiveLink
              }
            >
             <span className={styles.linkNumber}>02</span> CREW
            </NavLink>
          </li>
          <li className={styles.listItem} onClick={toggleStatus}>
            <NavLink
              to="/technology"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.inactiveLink
              }
            >
             <span className={styles.linkNumber}>03</span> TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
