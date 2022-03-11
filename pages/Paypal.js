import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios'
const Paypal = () => {
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
    return (
        <>
            <h1>hi</h1>
            <PayPalScriptProvider options={{ "client-id": "AYaC88wXkHCiNiBbd1AFXniZjkEeal1BQDC62bHIf1xOaVqwPGjDOL45B2zNrOTJ2yunaJDSUDGcghDF"}}>
                <PayPalButtons 
                style={{ layout: "vertical" }}
                createOrder={()=>createOrder()}
                onCancel={data => console.log("Compra Cancelada")}
                onApprove={(data,actions)=>{
                    console.log(data);
                    actions.order.capture()
                }}
                />
            </PayPalScriptProvider>
        </>
    );
}

export default Paypal;