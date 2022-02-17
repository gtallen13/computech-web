import Image from "next/image";
import styles from '../styles/Home.module.css'
const InfoSlide = ({image,title,category}) => {
    return (
        <div className={styles.slideContainer}>
            <div className={styles.slideText}>
                <h2>{title}</h2>
                <span>{category}</span>
            </div>
            <Image src={image} layout="fill" alt={`${title} image`}/>
        </div>
    );
}

export default InfoSlide;