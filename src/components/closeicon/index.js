import React from 'react';
import styles from './closeicon.module.css';
const CloseIcon = ({ action }) => {
  return (
    <div className={styles.wrapper} onClick={()=>action()}>
      X
    </div>
  )
}
export default CloseIcon;
