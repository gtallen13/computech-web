import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Productos.module.css'


export default function Home() {
  return (
    <div className={styles.Contenedor}>
      <Head>
        <title>CompuTech | Producto</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
      </Head>
      <div className={styles.Producto}>
          <div className={styles.lisProducto}>
            <div className={styles.ImagenContenedor}>
              <Image src="/Monitor.jpg" width={150} height={150}/>
            </div>
          <h1 className={styles.productotext}>Monitor Asusu Gamer 25 Pulgadas</h1>
          <h2 className={styles.productotext}>L. 6,000.00</h2>
          <div className={styles.btnContainerProducto}>
        <Link href="">
          <a className={styles.btnProducto}>Comprar Producto</a>
        </Link>
          </div>
        </div>
      </div>
      <div className={styles.Producto}>
        <div className={styles.lisProducto}>
            <div className={styles.ImagenContenedor}>
              <Image src="/Monitor-LG.jpg" width={250} height={150}/>
            </div>
          <h1 className={styles.productotext}>Monitor LG Gamer 25 Pulgadas</h1>
          <h2 className={styles.productotext}>L. 5,000.00</h2>
          <div className={styles.btnContainerProducto}>
        <Link href="">
          <a className={styles.btnProducto}>Comprar Producto</a>
        </Link>
          </div>
        </div>
      </div>
      <div className={styles.Producto}>
        <div className={styles.lisProducto}>
            <div className={styles.ImagenContenedor}>
              <Image src="/Monitor-Samsung.jpg" width={200} height={150}/>
            </div>
          <h1 className={styles.productotext}>Monitor Samsung Gamer 25 Pulgadas</h1>
          <h2 className={styles.productotext}>L. 6,000.00</h2>
          <div className={styles.btnContainerProducto}>
        <Link href="">
          <a className={styles.btnProducto}>Comprar Producto</a>
        </Link>
          </div>
        </div>
      </div>
    </div>
    
  )
}






