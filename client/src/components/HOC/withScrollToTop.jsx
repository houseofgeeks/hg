import React, { useEffect } from 'react';

const ScrollToTop = (Component) => {
    const NewComponent = () => {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
        return(
            <Component />
        );
    }

    return NewComponent;
}

export default ScrollToTop;