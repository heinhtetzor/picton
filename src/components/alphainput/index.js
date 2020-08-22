import React, { useEffect, useRef } from 'react';
import styles from './alphainput.module.css';
import { useSelector } from 'react-redux';
function AlphaInput({ handleAlphaChange }) {
    const i = useRef();
    const alphaState = useSelector(state => state.imageSettings['alpha']);
    useEffect(() => {
        i.current.value = alphaState;
    })
    return (
        <div className={styles.group}>
            <label htmlFor="alpha">Transparency</label>
            <input ref={i} onChange={e => handleAlphaChange(e)} type="range" min="0.1" max="1" step="0.1"/>
        </div>
    )
}

export default AlphaInput;
