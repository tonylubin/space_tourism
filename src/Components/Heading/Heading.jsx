import styles from './Heading.module.scss';

const Heading = (props) => {

    const { number, heading } = props;

    return (
        <div className={styles.headingContainer}>
            <p>{number}</p>
            <h2>{heading}</h2>
        </div>
    )
};

export default Heading;