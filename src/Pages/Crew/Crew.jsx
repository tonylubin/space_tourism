import PageNav from "../../Components/PageNav/PageNav";
import styles from "./Crew.module.scss";


const Crew = (props) => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.mainContainer__imgSection}>
        <div className={styles.mainContainer__imgSection__imgContainer}>
          <img src={require(`../../assets/${props.img}`)} alt="crew member" />
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
