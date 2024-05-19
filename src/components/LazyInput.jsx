import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';

LazyInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

function LazyInput({ value, onChange, ...otherProps }) {
    const [innerValue, setInnerValue] = useState(value);
    const elem = useRef();
    const escMode = useRef(false)

    useEffect(() => {
        setInnerValue(value)
    }, [value])
    
    function applyValue(){
        if (escMode.current) {
            escMode.current = false;            
        } else {
            onChange(innerValue);
        }
    }

    function checkKey(e){
        if(e.key === 'Enter') {
            applyValue();
        } else if (e.key === 'Escape'){
            setInnerValue(value);
            escMode.current = true;
            elem.current.blur();
        }
    }

    return <input 
        value={innerValue}
        onChange={e => setInnerValue(e.target.value)}
        onBlur = {applyValue}
        onKeyUp={checkKey}
        ref={elem}
        {...otherProps}
    />    
}

export default LazyInput;