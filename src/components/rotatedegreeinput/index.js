import React, { useEffect, useRef } from 'react';
import styles from './rotatedegreeinput.module.css';
import { useSelector } from 'react-redux';
function RotateDegreeInput({ handleRotateDegreeChange }) {
    const i = useRef();
    const rotateDegreeState = useSelector(state => state.imageSettings['rotateDegree']);
    useEffect(() => {
        i.current.value = rotateDegreeState;
    })
    return (
        <div className={styles.group}>
            <label htmlFor="rotateDegree">Rotate</label>
            <input ref={i} onChange={e => handleRotateDegreeChange(e)} type="range" min="-90" max="0" step="10"/>
        </div>
    )
}

export default RotateDegreeInput
