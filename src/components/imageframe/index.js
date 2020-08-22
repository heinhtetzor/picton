import React from 'react';
import styles from './imageframe.module.css';
import NoImage from '../noimage';
import MyImage from '../image';
import { useSelector } from 'react-redux';
const ImageFrame = ({ clearImageActions, getCanvasSnapshot }) => {
  const imgUrl = useSelector(state => state.image['imgData']);
  const textOverlay = useSelector(state => state.imageSettings['textOverlay']);
  const fontSize = useSelector(state => state.imageSettings['fontSize']);
  const fontFamily = useSelector(state => state.imageSettings['fontFamily'])  ;
  const color = useSelector(state => state.imageSettings['color']);
  const alpha = useSelector(state => state.imageSettings['alpha']);
  const rotateDegree = useSelector(state => state.imageSettings['rotateDegree']);
  const isPattern = useSelector(state => state.imageSettings['isPattern']);
  return (
    <div className={styles.wrapper}>
    {imgUrl ?

     <MyImage 
      imgUrl={imgUrl}
      clearImage={clearImageActions}
      getCanvasSnapshot={getCanvasSnapshot}
      textOverlay={textOverlay}
      fontSize={fontSize}
      fontFamily={fontFamily}
      color={color}
      alpha={alpha}
      rotateDegree={rotateDegree}
      isPattern={isPattern}
      /> 
    :
     <NoImage/>
    }
    </div>
  )

}
export default ImageFrame;
