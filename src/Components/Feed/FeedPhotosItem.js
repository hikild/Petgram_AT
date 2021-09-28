import React from 'react';
import styles from './FeedPhotosItem.module.css';
import Image from '../Helper/Image';

const FeedPhotosItem = ({ photo, description, like,  setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo} alt={description}/>
      <span className={styles.visualizacao}>{like}</span>
    </li>
  );
};

export default FeedPhotosItem;
