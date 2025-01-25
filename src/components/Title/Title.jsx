import PropTypes from 'prop-types';
import styles from './Title.module.css';

Title.propTypes = {
   title: PropTypes.string,
};

function Title({ title }) {
   return <h2 className={styles['text']}>{title}</h2>;
}

export default Title;
