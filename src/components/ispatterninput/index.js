import React, { useRef, useEffect } from 'react';
import styles from './ispatterninput.module.css';
import { useSelector } from 'react-redux';
function IsPatternInput({ handleIsPatternChange }) {
    const isPatternState = useSelector(state => state.imageSettings['isPattern']);
    const i = useRef();
    useEffect(() => {
        i.current.checked = isPatternState;
    })
    return (
        <div className={styles.group}>
            <label htmlFor="isPattern">Pattern</label>
            <input ref={i} type="checkbox" onChange={e => handleIsPatternChange(e)} />
      </div>
    )
}

export default IsPatternInput
