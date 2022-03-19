import { useCart } from "react-use-cart";
import {connectToDatabase} from "../utils/mongodb"
import Image from 'next/image'
const TestProduct = ({productos}) => {
    const {addItem, emptyCart} = useCart()
    return (
        <div>
            {productos.map((item,key)=>(
                <div key={key}>
                    <p>{item.nombre}</p>
                    <Image src={item.imagen} width={200} height={200} alt={`imagen de ${item.nombre}`}/>
                    <button onClick={()=>addItem({
                        id:item.id, 
                        price:item.precio,
                        quantity:1,
                        name:item.nombre,
                        imagen:item.imagen
                    })}
                    >Add to cart</button>     
                </div>
            ))}
            
            <button onClick={()=>emptyCart()}>Clear cart</button>
        </div>
    );
}

export async function getStaticProps(context){
    const {db} = await connectToDatabase();

    const data = await db
    .collection("productos")
    .find()
    .toArray()

    const productos = data.map(producto=>{
        const id = JSON.parse(JSON.stringify(producto._id));
        return{
            id: id,
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            precio: producto.precio,
            especificaciones: producto.especificaciones,
            imagen: producto.imagen
        }
    })
    return {
        props:{productos}
    }
    
}

export default TestProduct;