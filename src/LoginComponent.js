import React from 'react'
import WebComponent from './WebComponent';
import MobileViewComponent from './MobileViewComponent';
export default function LoginComponent() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 620;
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return width < breakpoint ? <MobileViewComponent /> : <WebComponent />;
}

