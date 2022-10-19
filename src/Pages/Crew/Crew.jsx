import PageNav from "../../Components/PageNav/PageNav";
import styles from "./Crew.module.scss";


const Crew = (props) => {

  const { role, name, bio, img } = props;

  return (
    <main className={styles.mainContainer}>
      <div className={styles.mainContainer__imgSection}>
        <div className={styles.mainContainer__imgSection__imgContainer}>
          <img src={require(`../../assets/${img}`)} alt="crew member" />
        </div>
      </div>
      <div className={styles.mainContainer__infoSection}>
        <PageNav pageName="crew" />
        <h3>{role.toUpperCase()}</h3>
        <p className={styles.mainContainer__infoSection__crewMember}>
          {name.toUpperCase()}
        </p>
        <p className={styles.mainContainer__infoSection__bio}>{bio}</p>
      </div>
    </main>
  );
};

export default Crew;
