import React, { useEffect, useState, useRef } from 'react';
import styles from './image.module.css';
import CloseIcon from '../closeicon';

const MyImage = ({ imgUrl, 
                   clearImage, 
                   getCanvasSnapshot,
                   textOverlay, 
                   isPattern,
                   fontSize, 
                   fontFamily, 
                   color, 
                   alpha,
                   rotateDegree}) => {
  const c = useRef();
  useEffect(() => {
    const ctx = c.current.getContext('2d');
    const i = new Image();
    i.src = imgUrl;
    i.onload = () => {
      if(i.width > 1000 && i.height > 1000) {
        i.width *= 0.5;
        i.height *= 0.5;
      }
     
      const textLocation = {
        x : i.width/2 - (i.width/5),
        y : i.height/2
      }
      //image
      c.current.width = i.width;
      c.current.height = i.height;
      ctx.drawImage(i, 0, 0, i.width, i.height);
      //text
      ctx.fillStyle = `${color}`;
      ctx.globalAlpha = `${alpha}`;
      ctx.font = `${fontSize}px ${fontFamily}`;
      let textWidth = ctx.measureText(textOverlay);
      if(isPattern) {
        // ctx.translate(-400, -100);
        ctx.rotate(rotateDegree * Math.PI/180); 
        ctx.translate(-1000, -100); 
        for(let i = 0; i < 30; i++) {
          
          ctx.fillText(textOverlay||"", 10, 50+(i*150));
          for(let j = 0; j < 30; j++) {
            ctx.fillText(textOverlay||"", 10+textWidth.width+(j*200), 50+(i*150));
          }
        }
      }
      else {
          ctx.translate(textLocation.x, textLocation.y);
          ctx.rotate(rotateDegree * Math.PI/180); 
          ctx.fillText(textOverlay||"", 0, 0);
      }
      
      getCanvasSnapshot(c.current);
    }
    
  })
  return (
    <div className={styles.wrapper}>
        <CloseIcon action={clearImage}/>
        <canvas ref={c} className={styles.canvas} >
      </canvas>
    </div>
  )
}
export default MyImage;
