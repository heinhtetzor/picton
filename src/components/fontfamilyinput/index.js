import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './fontfamilyinput.module.css';
const FontFamilyInput = ({ handleFontChange }) => {
    const i = useRef();
    const fontFamilyState = useSelector(state => state.imageSettings['fontFamily']);
    useEffect(() => {
        i.current.value = fontFamilyState;
    })
    return (
        <div className={styles.group}>
            <label>Font</label>
            <select ref={i} onChange={handleFontChange}>
                <option value="Georgia">Georgia</option>
                <option value="Russo One">Russo One</option>
                <option value="Roboto Mono">Roboto Mono</option>
                <option value="Poppins">Poppins</option>
                <option value="Parisienne">Parisienne</option>
                <option value="Special Elite">Special Elite</option>
                <option value="Monoton">Monoton</option>
            </select>
        </div>
    )
}
export default FontFamilyInput;