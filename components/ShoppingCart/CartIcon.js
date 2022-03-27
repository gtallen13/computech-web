import Link from 'next/link'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart';
import styles from '../../styles/Cart.module.css'
const CartIcon = () => {
    const [amountItems, setAmountItems] = useState(0)
    const {totalItems} = useCart()
    useEffect(()=>{
        setAmountItems(totalItems)
    },[totalItems])
    return (
        <Link href="/Cart">
            <a>
                <div className={styles.cartContainer}>
                    <span className={styles.amountItems}>{amountItems}</span>
                        <i><FontAwesomeIcon icon={faShoppingCart} size="2x" color={"#fff"}/></i>
                </div>
            </a>
        </Link>
    );
}

export default CartIcon;