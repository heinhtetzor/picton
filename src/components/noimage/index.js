import React from 'react';
import styles from './noimage.module.css';
import { useDispatch, useStore, useSelector } from 'react-redux';

const NoImage = () => {
  const store = useStore();
  const dispatch = useDispatch();
  const image = useSelector(state => state.image);
  const handleOnChange = e => {
    const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.addEventListener("load", () => {
        dispatch({
          type : 'ADD',
          imgData : fileReader.result
        })
      })  
  }
  return (
    <div className={styles.wrapper}>
      <label className={styles.imageSelector} htmlFor="image">
        <span className={styles.emoji}>
        📷
        </span>
        </label>
      <input id="image" className={styles.chooseFileBtn} type="file" onChange={handleOnChange} accept="image/*"/>
    </div>
  )
}

export default NoImage;
