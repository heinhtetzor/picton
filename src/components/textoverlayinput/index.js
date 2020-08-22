import React, { useEffect, useRef } from 'react';
import styles from './textoverlayinput.module.css';
import { useSelector } from 'react-redux';
function TextOverlayInput({ handleTextChange }) {
    const textOverlayState = useSelector(state => state.imageSettings['textOverlay']);
    const i = useRef();
    useEffect(() => {
        i.current.value = textOverlayState;
    })
    return (
        <div className={styles.group}>
            <label>Your Text</label>
            <input ref={i} onChange={e => handleTextChange(e)}/>
        </div>
    )
}

export default TextOverlayInput;
