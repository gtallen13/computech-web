import styles from "../../styles/Home.module.css"
import GalleryImage from './GalleryImage';
const GalleryView = () => {
    const imagesSrcs = ['gallery-image1.jpg','gallery-image2.jpg','gallery-image3.jpg','gallery-image4.jpg']
    return (
        <div className={styles.galleryContainer}>
            {imagesSrcs.map((image,key)=>(<GalleryImage imgSrc={image} key={key}/>))}
        </div>
    );
}

export default GalleryView;