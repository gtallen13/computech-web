import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Productos.module.css'
import { useCart } from 'react-use-cart'
import {connectToDatabase} from '../../utils/mongodb'
import { useRouter } from 'next/router'
import EmptyScreen from '../../components/EmptyScreen'

const Productos = ({productos}) => {
  const {addItem} = useCart()
  const router = useRouter();
  const {categoria} = router.query
  const filteredProductos = []
  //obtener productos de la categoria especificada
  productos.forEach(item => {
    if (item.categoria === categoria){
      filteredProductos.push(item)
    }
  });
  return (
    <>
        <Head>
          <title>CompuTech | Producto</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
        </Head>
        {filteredProductos.length === 0 && <EmptyScreen msg="Productos en camino..."/>}
        <div className={styles.Contenedor}>
        {filteredProductos.map(item=>(
          
          <div className={styles.Producto} key={item.id}>
              <div className={styles.lisProducto}>
                <div className={styles.ImagenContenedor}>
                  <Image src={item.imagen} width={150} height={150} alt=""/>
                </div>
              <h1 className={styles.productotext}>{item.nombre}</h1>
              <h2 className={styles.productotext}>L. {item.precio}</h2>
              <div className={styles.btnContainerProducto}>
                <Link href="">
                  <a className={styles.btnProducto}>Agregar al Carrito</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
    
  )
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
      id:id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      categoria:producto.categoria
    }
  })

  return {
    props: {
      productos
    }
  }
}

export default Productos




