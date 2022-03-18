import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios'
import { ToastContainer, toast } from 'react-nextjs-toast'
import { useContext,useState } from "react";
import { CartContext } from "../components/Cart";
const Paypal = () => {
    const amountHandler = useContext(CartContext)
    const createOrder = async () => {
        try{
            const payload = {value:"100.00", currency_code:"USD"}
            const res = await axios({
                url:"http://localhost:3000/api/payment",
                data:payload,
                method:"POST",
                headers:{
                    "Content-type": "application/json"
                }
            })
            return res.data.id
        }catch(e){
            console.log(e);
        }
    }
    const onClickNotify = (type)=>{
        switch(type){
            case "success":
                toast.notify("Muchas gracias por su compra", {
                    type:"success",
                    title:"Pago exitoso"
                })
                break;
            case "error":
                toast.notify("La compra fue cancelada", {
                    type:"error",
                    title:"Error en la compra"
                })
                break;
        }
    }
    return (
        <>
            <ToastContainer align={"right"} position={"bottom"}/>
            <PayPalScriptProvider options={{ "client-id": "AYaC88wXkHCiNiBbd1AFXniZjkEeal1BQDC62bHIf1xOaVqwPGjDOL45B2zNrOTJ2yunaJDSUDGcghDF"}}>
                <PayPalButtons 
                style={{ layout: "vertical" }}
                createOrder={()=>createOrder()}
                onCancel={data => onClickNotify("error")}
                onApprove={(data,actions)=>{
                    console.log(data);
                    actions.order.capture()
                    onClickNotify("success")
                }}
                />
            </PayPalScriptProvider>
            <button value={"Add"} onClick={()=> amountHandler()}/>
        </>
    );
}

export default Paypal;