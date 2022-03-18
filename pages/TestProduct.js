import { useCart } from "react-use-cart";
const TestProduct = () => {
    const {addItem} = useCart()
    return (
        <div>
            <button onClick={()=>addItem({id:"I-002", 
                price:1500,
                quantity:1}
            )}>Add to cart</button>
        </div>
    );
}

export default TestProduct;