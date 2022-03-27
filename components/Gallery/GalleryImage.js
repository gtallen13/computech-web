import Image from 'next/image'
import styles from '../../styles/Home.module.css'
const GalleryImage = ({imgSrc}) => {
    return (
        <Image 
        src={`/${imgSrc}`} 
        width={300} 
        height={500} 
        alt="gallery-image"
        placeholder='blur'
        blurDataURL={imgSrc}
        className={styles.galleryImage}
        />
    );
}

export default GalleryImage;