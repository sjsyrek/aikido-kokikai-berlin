import React from "react";
import Layout from "src/components/Layout";
import Content from "src/components/Content";
import galleryImages from "./galleryImages";
import styles from "./pages.module.css";

const images = galleryImages.map((image, i) => (
  <img src={image} alt={`Gallery ${i + 1}`} />
));

const content = (
  <>
    <div className={styles.heavy}>Photo Gallery</div>
    <div className={styles.gallery}>{images}</div>
  </>
);

const Gallery = () => (
  <Layout>
    <Content content={content} />
  </Layout>
);

export default Gallery;
