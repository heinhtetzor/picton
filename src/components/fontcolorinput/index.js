import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './fontcolorinput.module.css';
function FontColorInput({ handleFontColorChange }) {
    const fontColorState = useSelector(state => state.imageSettings['color']);
    const i = useRef();
    useEffect(() => {
        i.current.value = fontColorState;
    })
    return (
        <div className={styles.group}>
            <label htmlFor="color">Font Color</label>
            <input ref={i} onChange={e => handleFontColorChange(e)} type="color"/>
        </div>
    )
}

export default FontColorInput
