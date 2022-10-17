import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Heading from "../Heading/Heading";
import styles from "./CrewLayout.module.scss";

const CrewLayout = () => {
  return (
    <div className={styles.pageLayout}>
      <Header />
      <Heading number="02" heading="MEET YOUR CREW" />
      <Outlet />
    </div>
  );
};

export default CrewLayout;
