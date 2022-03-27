
import axios from 'axios'
export const createOrder = async (cartTotal) => {
    try{
        const payload = {value:cartTotal, currency_code:"USD"}
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

