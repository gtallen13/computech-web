import { useCart } from "react-use-cart";
const Cart = () => {
    const {items,totalItems} = useCart()
    console.log(totalItems);
    return (
        <div>
            <p>{JSON.stringify(items)}</p>
        </div>
    );
}

export default Cart;