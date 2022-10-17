import styles from './DestinationLayout.module.scss';
import Heading from "../Heading/Heading";
import Header from "../Header/Header";
import { Outlet } from 'react-router-dom';

const DestinationLayout = () => {

    return (
        <div className={styles.pageLayout}>
            <Header />
            <Heading number="01" heading="PICK YOUR DESTINATION"/>
            <Outlet />
        </div>
    )
};

export default DestinationLayout;