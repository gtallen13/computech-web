import { useCart } from "react-use-cart";
import styles from "../styles/Cart.module.css"
import {ToastContainer,toast} from 'react-nextjs-toast'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { createOrder } from "../utils/PaypalCheckout";
import EmptyCartScreen from "../components/ShoppingCart/EmptyCartScreen";
import Image from "next/image";
import { useState,useEffect } from "react";
const Cart = () => {
    const {
        items,
        updateItemQuantity,
        isEmpty,
        cartTotal,
        emptyCart
    } = useCart()
    
    const onClickNotify = (type)=>{
        switch(type){
            case "success":
                emptyCart()
                toast.notify("Muchas gracias por su compra", {
                    type:"success",
                    title:"Pago exitoso"
                })
                break;
            case "error":
                console.log("cancelled");
                toast.notify("La compra fue cancelada", {
                    type:"error",
                    title:"Error en la compra",
                    
                })
                break;
        }
    }
    return (
        <>
            {isEmpty ? <EmptyCartScreen/>:
                <div className={styles.cartPage}>
                    <ToastContainer align={"right"} position={"top"}/>
                    <table className={styles.cartTable}>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item=>(
                            <tr key={item.id}>
                                <td>
                                    <Image src={item.imagen} height={90} width={100} alt="product pic"/>
                                </td>
                                <td>
                                    <span>{item.name}</span>
                                </td>
                                <td>
                                    <div className={styles.quantityContainer}>
                                        <button onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>&#8722;</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>&#43;</button>
                                    </div>
                                </td>
                                <td>
                                    <span>$ {item.price}</span>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <span className={styles.cartTotal}>Total: $ {cartTotal}</span>
                    <div className={styles.checkoutWrapper}>
                        <div className={styles.checkoutContainer}>
                            <button onClick={()=> emptyCart()}>Empty Cart</button>
                            <PayPalScriptProvider options={{ "client-id": "AYaC88wXkHCiNiBbd1AFXniZjkEeal1BQDC62bHIf1xOaVqwPGjDOL45B2zNrOTJ2yunaJDSUDGcghDF"}}>
                                <PayPalButtons 
                                style={{ layout: "horizontal" }}
                                onClick={()=> isEmpty ? onClickNotify("empty"):null}
                                createOrder={()=> createOrder(cartTotal)}
                                onCancel={(data) => onClickNotify("error")}
                                onApprove={(data,actions)=>{
                                    actions.order.capture()
                                    onClickNotify("success")
                                }}
                                />
                            </PayPalScriptProvider>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

//validations on checkout

export default Cart;