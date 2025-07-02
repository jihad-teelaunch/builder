import { useState, useEffect } from 'react';

interface WindowSize {
    width: number;
    height: number;
}

export function useWindowSize(): WindowSize {
    const [size, setSize] = useState<WindowSize>({width:0,height:0});

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window?.innerWidth,
                height: window?.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        // Initial call in case of SSR or late execution
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return size;
}