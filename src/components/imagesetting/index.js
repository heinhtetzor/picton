import React from 'react';
import { useDispatch } from 'react-redux';  
import styles from './imagesetting.module.css';
import AlphaInput from '../alphainput';
import FontSizeInput from '../fontsizeinput';
import FontColorInput from '../fontcolorinput';
import TextOverlayInput from '../textoverlayinput';
import RotateDegreeInput from '../rotatedegreeinput';
import IsPatternInput from '../ispatterninput';
import FontFamilyInput from '../fontfamilyinput';
const ImageSetting = ({ canvasSnapshot }) => {

  const dispatch = useDispatch();
  const handleTextChange = e => {
    dispatch({
      type : 'UPDATE_TEXT',
      text : e.target.value
    })
  }
  const handleFontColorChange = e => {
    dispatch({
      type : 'UPDATE_COLOR',
      color : e.target.value
    })
  }
  const handleFontSizeChange = e => {
    dispatch({
      type : 'UPDATE_FONTSIZE',
      fontSize : e.target.value
    })
  }
  const handleAlphaChange = e => {
    dispatch({
      type : 'UPDATE_ALPHA',
      alpha : e.target.value
    })
  }
  const handleRotateDegreeChange = e => {
    dispatch({
      type : 'UPDATE_ROTATEDEGREE',
      rotateDegree : e.target.value
    })
  }
  const handleIsPatternChange = e => {
    dispatch({
      type : 'TOGGLE_PATTERN'
    })
  }
  const handleFontChange = e => {
    dispatch({
      type : 'UPDATE_FONTFAMILY',
      fontFamily : e.target.value
    })
  }
  return (
    <div className={styles.wrapper}>
        <TextOverlayInput 
        handleTextChange={handleTextChange}/>
        <FontFamilyInput 
        handleFontChange={handleFontChange}/>
        <FontSizeInput 
        handleFontSizeChange={handleFontSizeChange}/>
        <FontColorInput 
        handleFontColorChange={handleFontColorChange}/>
        <AlphaInput 
        handleAlphaChange={handleAlphaChange}/>
        <RotateDegreeInput 
        handleRotateDegreeChange={handleRotateDegreeChange}/>
        <IsPatternInput 
        handleIsPatternChange={handleIsPatternChange}/>
        <a
        className={styles.downloadBtn} 
        href={canvasSnapshot} 
        rel="noopener noreferrer" 
        target="_blank" 
        download>Download</a>
    </div>
  )
}
export default ImageSetting;
