import styles from "./PageNav.module.scss";
import { NavLink } from "react-router-dom";
import pageInfo from "../../data.json";

const PageNav = (props) => {
  // nav class for different pages
  const pageType = {
    destinations: "destinationsLinks",
    crew: "crewLinks",
    technology: "technologyLinks",
    home: "homeLinks",
  };

  const getLinks = pageInfo[props.pageName].map((item, index) => (
    <li key={index} className={`${styles[pageType[props.pageName]]}`}>
      <NavLink
        to={`../${item.name.replace(" ", "").toLowerCase()}`}
        className={({ isActive }) =>
          isActive
            ? styles[`${pageType[props.pageName]}__activated`]
            : styles[`${pageType[props.pageName]}__inactivated`]
        }
      >
        {item.link ? item.link.toUpperCase() : item.link}
      </NavLink>
    </li>
  ));

  return (
    <>
      <ul className={`${styles[`navContainer-${pageType[props.pageName]}`]}`}>
        {getLinks}
      </ul>
    </>
  );
};

export default PageNav;
