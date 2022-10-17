import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Heading from "../Heading/Heading";
import styles from "./TechnologyLayout.module.scss";

const TechnologyLayout = () => {
    return (
        <div className={styles.pageLayout}>
            <Header />
            <Heading number="03" heading="SPACE LAUNCH 101" />
            <Outlet />
        </div>
    )
};

export default TechnologyLayout;