import styles from "./PageNav.module.scss";
import { NavLink } from "react-router-dom";
import pageInfo from "../../data.json";

const PageNav = ({ pageName }) => {

  // nav classname for different pages
  const pageType = {
    destinations: "destinationsLinks",
    crew: "crewLinks",
    technology: "technologyLinks",
    home: "homeLinks",
  };

  const getLinks = pageInfo[pageName].map((item, index) => (
    <li key={index} className={`${styles[pageType[pageName]]}`}>
      <NavLink
        to={`../${item.name.replace(" ", "").toLowerCase()}`}
        className={({ isActive }) =>
          isActive
            ? styles[`${pageType[pageName]}__activated`]
            : styles[`${pageType[pageName]}__inactivated`]
        }
      >
        {item.link ? item.link.toUpperCase() : item.link}
      </NavLink>
    </li>
  ));

  return (
    <>
      <ul className={`${styles[`navContainer-${pageType[pageName]}`]}`}>
        {getLinks}
      </ul>
    </>
  );
};

export default PageNav;
