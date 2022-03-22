import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination,Navigation } from 'swiper'
import InfoSlide from '../components/InfoSlide'
import GalleryView from '../components/Gallery/GalleryView'

export default function Home() {
  return (
    <div>
      <Head>
        <title>CompuTech | Inicio</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
      </Head>
      <div className={styles.sliderWrapper}>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable:true,
        }}
        navigation={true}
        modules={[Pagination,Navigation]}
        className={styles.homeSlider}
        >
          <SwiperSlide>
            <InfoSlide image={"/mouse.jpg"} title="Razor Viper Mini" category="Mouse"/>
          </SwiperSlide>
          <SwiperSlide>
            <InfoSlide image={"/mouse.jpg"} title="Razor Viper Mini 1" category="Mouse"/>
          </SwiperSlide>
          <SwiperSlide>
            <InfoSlide image={"/mouse.jpg"} title="Razor Viper Mini 2" category="Mouse"/>
          </SwiperSlide>
          <SwiperSlide>
            <InfoSlide image={"/mouse.jpg"} title="Razor Viper Mini 3" category="Mouse"/>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.btnContainer}>
        <Link href="/categorias">
          <a className={styles.btnComprar}>Comprar Ahora</a>
        </Link>
      </div>

      {/* About y contacto */}
      <section className={styles.aboutContactSection}>
        <div>
          <h3>Acerca de Nosotros</h3>
          <div className={styles.info}>
            <Image src={'/about-pic.jpg'} width={1000} height={630} alt="about-pic"/>
            <p>
              Somos una empresa hondureña ubicados en La Ceiba, Atlantida que tiene como objetivo brindar el mejor servicio y los mejores productos de computacion a nuestros clientes. Contamos con los mejores productos a un precio muy competitivo para que puedas armar tu PC o para que puedas incrementar la potencia de tu PC. No esperes mas y ponte a comprar con CompuTech!
            </p>
          </div>
        </div>
        <div>
          <h3>Contacto</h3>
          <GalleryView/>
          <div className={styles.info}>
            <p>Correo: infocomputech@computech.com</p>
            <p>Telefono: 9920-8910</p>  
          </div>
        </div>
      </section>
    </div>

  )
}
