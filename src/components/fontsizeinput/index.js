import React, { useEffect, useRef } from 'react'
import styles from './fontsizeinput.module.css';
import {  useSelector } from 'react-redux';
function FontSizeInput({ handleFontSizeChange }) {
    const fontSizeState = useSelector(state => state.imageSettings['fontSize']);
    const i = useRef();
    useEffect(() => {
        i.current.value = fontSizeState;
    })
 
    return (
        <div className={styles.group}>
            <label htmlFor="fontSize">Font Size</label>
            <input 
            ref={i}
            placeholder="*" onChange={e => handleFontSizeChange(e)} type="number" step="10" min="10"/>
        </div>
        )
}

export default FontSizeInput
