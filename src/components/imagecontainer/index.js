import React, { useState } from 'react';
import styles from './imagecontainer.module.css';
import ImageFrame from '../imageframe';
import ImageSetting from '../imagesetting';
import { useDispatch } from 'react-redux';
const ImageContainer = () => {
  const [canvasSnapshot, setCanvasSnapshot] = useState(null);
  const dispatch = useDispatch();
  const clearImageActions = () => {
    dispatch({
      type: 'REMOVE'
    })
    dispatch({
      type: 'RESET_SETTINGS'
    })
  }
  const getCanvasSnapshot = (c) => {
    setCanvasSnapshot(c.toDataURL());
  }
  return (
    <div className={styles.wrapper}>
       <ImageFrame clearImageActions={clearImageActions} getCanvasSnapshot={getCanvasSnapshot}/> 
       <ImageSetting canvasSnapshot={canvasSnapshot}/>
    </div>
  )
}
export default ImageContainer;
