import styles from "./Technology.module.scss";
import { useMediaQuery } from "react-responsive";
import PageNav from "../../Components/PageNav/PageNav";
import launchVehicle_ls from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceport_ls from "../../assets/technology/image-spaceport-landscape.jpg";
import spaceCapsule_ls from "../../assets/technology/image-space-capsule-landscape.jpg";
import launchVehicle_p from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport_p from "../../assets/technology/image-spaceport-portrait.jpg";
import spaceCapsule_p from "../../assets/technology/image-space-capsule-portrait.jpg";

// Images reference object
const img = {
  portrait: {
    "Launch vehicle": launchVehicle_p,
    "Spaceport": spaceport_p,
    "Space capsule": spaceCapsule_p,
  },
  landscape: {
    "Launch vehicle": launchVehicle_ls,
    "Spaceport": spaceport_ls,
    "Space capsule": spaceCapsule_ls,
  },
};

const Technology = (props) => {
  // react-responsive pkg for choosing right image from img obj above
  const isDesktopSize = useMediaQuery({ query: "(min-width: 1280px)" });

  return (
    <main className={styles.mainContainer}>
      <div className={styles.mainContainer__imgHolder}>
        <div className={styles.imgBox}>
          <img
            src={
              isDesktopSize
                ? img.portrait[props.title]
                : img.landscape[props.title]
            }
            alt="tech item"
          />
        </div>
      </div>
      <div className={styles.mainContainer__infoHolder}>
          <PageNav pageName="technology" />
          <div className={styles.mainContainer__infoHolder__heading}>
            <h3 className={styles.title}>THE TERMINOLOGY...</h3>
            <p className={styles.subTitle}>{props.title.toUpperCase()}</p>
          </div>
          <p className={styles.mainContainer__infoHolder__description}>
            {props.description}
          </p>
      </div>
    </main>
  );
};

export default Technology;
