import React, {useRef, useEffect} from 'react';

const useFade = (duration = 2, delay = 0) => {
    const element = useRef();

    useEffect(() => {
        if (element) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        }
    }, []);

    if (typeof duration !== "number" || typeof delay !== "number") {
        return;
    }

    return { ref: element};
}

export default useFade;