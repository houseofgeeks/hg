import React, { useEffect } from 'react';
import Footer from "../Footer/Footer";

const ScrollToTop = (Component) => {
    const NewComponent = () => {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
        return(
            <div>
            <Component />
            <Footer/>
            </div>
        );
    }

    return NewComponent;
}

export default ScrollToTop;