import React from 'react';
import ImageContainer from '../imagecontainer';
import styles from './mainview.module.css';
const MainView = () => {
  return (
    <div className={styles.wrapper}>
      <ImageContainer />
    </div>
  )
}
export default MainView;
