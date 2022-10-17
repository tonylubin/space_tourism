import PageNav from "../../Components/PageNav/PageNav";
import styles from "./Crew.module.scss";
import DH from "../../assets/crew/image-douglas-hurley.png";
import MS from "../../assets/crew/image-mark-shuttleworth.png";
import VG from "../../assets/crew/image-victor-glover.png";
import AA from "../../assets/crew/image-anousheh-ansari.png";

const img = {
  "Douglas Hurley": DH,
  "Mark Shuttleworth": MS,
  "Victor Glover": VG,
  "Anousheh Ansari": AA,
};

const Crew = (props) => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.mainContainer__imgSection}>
        <div className={styles.mainContainer__imgSection__imgContainer}>
          <img src={img[props.name]} alt="crew member" />
        </div>
      </div>
      <div className={styles.mainContainer__infoSection}>
        <PageNav pageName="crew" pageLinkName=" " />
        <h3>{props.role.toUpperCase()}</h3>
        <p className={styles.mainContainer__infoSection__crewMember}>
          {props.name.toUpperCase()}
        </p>
        <p className={styles.mainContainer__infoSection__bio}>{props.bio}</p>
      </div>
    </main>
  );
};

export default Crew;
