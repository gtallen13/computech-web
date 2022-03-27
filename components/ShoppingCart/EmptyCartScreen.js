import { faDolly } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../../styles/Cart.module.css'
const EmptyCartScreen = () => {
    return (
        <div className={styles.emptyCartContainer}>
            <h2>Nothing here</h2>
            <i><FontAwesomeIcon icon={faDolly} size="2x" color="#0e0e0e"/></i>
        </div>
    );
}

export default EmptyCartScreen;