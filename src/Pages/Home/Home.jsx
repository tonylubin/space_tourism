import styles from "./Home.module.scss";
import Header from "../../Components/Header/Header";
import Title from "../../Components/Title/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleHoverStyle = () => setIsHovering(!isHovering);
  const navigate = useNavigate();

  return (
    <div className={styles.homePage}>
      <Header />
      <div className={styles.homePage__subSection}>
        <main>
          <Title />
          <p>
            So, you want to travel to Space Let’s face it; if you want to go to
            space, you might as well genuinely go to outer space and not hover
            kind of on the edge of it. Well sit back, and relax because we’ll give
            you a truly out of this world experience!
          </p>
        </main>
        <div className={styles.btnHolder}>
          <button
            className={`${styles.circle} ${isHovering ? styles.circleHover : ""}`}
            onMouseOver={handleHoverStyle}
            onMouseOut={handleHoverStyle}
            onClick={() => navigate("/destinations")}
          >
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
