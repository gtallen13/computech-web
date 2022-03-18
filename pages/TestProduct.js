import { useCart } from "react-use-cart";
const TestProduct = () => {
    const {addItem, emptyCart} = useCart()
    return (
        <div>
            <button onClick={()=>addItem({id:"I-003", 
                price:1500,
                quantity:1,
                name:"X-Lion"
            }
            )}>Add to cart</button>
            <button onClick={()=>emptyCart()}>Clear cart</button>
        </div>
    );
}

export default TestProduct;