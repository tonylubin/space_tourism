import PageNav from "../../Components/PageNav/PageNav";
import styles from "./Destination.module.scss";
import Moon from "../../assets/destination/image-moon.png";
import Mars from "../../assets/destination/image-mars.png";
import Europa from "../../assets/destination/image-europa.png";
import Titan from "../../assets/destination/image-titan.png";

const img = {
  Moon: Moon,
  Mars: Mars,
  Europa: Europa,
  Titan: Titan,
};

const Destination = (props) => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.mainContainer__imgHolder}>
        <div className={styles.mainContainer__imgHolder__container}>
          <img src={img[props.title]} alt={props.title} />
        </div>
      </div>
      <div className={styles.mainContainer__infoHolder}>
        <PageNav pageName="destinations" />
        <div className={styles.infoContainer}>
          <h3>{props.title.toUpperCase()}</h3>
          <p className={styles.mainInfo}>{props.info}</p>
        </div>
        <div className={styles.mainContainer__infoHolder__div}>
          <div className={styles.subHeadingHolder}>
            <p className={styles.subHeading} id={styles.sub1}>
              AVG. DISTANCE
            </p>
            <p className={styles.data}>{props.distance.toUpperCase()}</p>
          </div>
          <div className={styles.subHeadingHolder}>
            <p className={styles.subHeading} id={styles.sub2}>
              EST. TRAVEL TIME
            </p>
            <p className={styles.data}>{props.time.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destination;
