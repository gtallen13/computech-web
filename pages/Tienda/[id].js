import Image from 'next/image'
import {ToastContainer, toast} from 'react-nextjs-toast'
import { connectToDatabase } from "../../utils/mongodb";
import { useCart } from 'react-use-cart'
import { ObjectID } from "bson";
import {UserContext} from '../../utils/UserContext'
import { useContext } from 'react';
const DetallesProducto = ({producto}) => {
    const {addItem} = useCart()
    const {user} = useContext(UserContext)
    const onClickNotify = (productoAgg)=>{
        if (!user){
          toast.notify("Por favor inicie sesion",{
            title:"Inicie Sesion"
          })
          return 0;
        }
        addItem({
          id:productoAgg._id,
          name: productoAgg.nombre,
          price: productoAgg.precio,
          image: productoAgg.imagen,
          category:productoAgg.categoria
        })
        toast.notify(`${productoAgg.nombre} fue agregado!`,{
          title:"Producto Agregado",
          type:"success",
          duration: 3
        })
      }
    return (
        <header className="row">
        <ToastContainer align="right" position="top"/>
        <div className="col-md-12">
            <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
            <div className="row">
                <div className="col-md-4">
                <Image 
                src={producto.imagen} 
                alt="" 
                className="img-fluid" 
                width={200}
                height={200}
                />
                </div>
                <div className="col-md-8">
                <h1 className="texto">{producto.nombre}</h1>
                <h3 className="texto">$ {producto.precio}</h3>
                
                <p className="texto">{producto.descripcion}</p>

                <h3 className="texto">Especificaciones</h3>
                <ul>
                    {producto.especificaciones.map((item,key)=>(
                        <li key={key} className="texto">{item}</li>
                    ))}
                </ul>
                    <a className="button" href="#">Whatsapp</a>
                    <button 
                    className="btn-agg-carrito"
                    onClick={()=>onClickNotify(producto)}>Agregar al Carrito</button>
                </div>
            </div>
            </div>
        </div>
        </header>
    )
}


export async function getStaticPaths(){
    const {db} = await connectToDatabase();
    const data = await db
    .collection("productos")
    .find()
    .toArray()
    const paths = data.map(producto=>{
        return{
            params: {
                id: producto._id.toString()
            }
        }
    })
    return{
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}){
    const {db} = await connectToDatabase();

    const data = await db
    .collection("productos")
    .findOne({
        _id: ObjectID(params.id)
    })
    return{
        props:{
            producto:JSON.parse(JSON.stringify(data))
        }
    }
}

export default DetallesProducto;
