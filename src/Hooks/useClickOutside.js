import { useEffect } from 'react';

export default function useClickOutside(elemRefs, setShow) {
    useEffect(() => {
        const handleClick = (event) => {
            const path = event.composedPath();
            let isExcluded = false;
            elemRefs.forEach((elem) => {
                if (elem.current && path.includes(elem.current)) {
                    isExcluded = true;
                }
            });
            if (!isExcluded) {
                setShow(false);
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [elemRefs, setShow]);
}