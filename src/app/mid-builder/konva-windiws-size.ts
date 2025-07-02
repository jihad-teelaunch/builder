import { useState, useEffect } from 'react';

interface WindowSize {
    Kwidth: number;
    Kheight: number;
}

export function KonvaWindowsSize(): WindowSize {
    const [size, setSize] = useState<WindowSize>({
        Kwidth: 0,
        Kheight:0,
    });

    useEffect(() => {
        const element = document.getElementById("main-editor");
        if (!element) return;

        const observer = new ResizeObserver((entries) => {
            const entry = entries[0];
            if (entry) {
                const { width, height } = entry.contentRect;
                setSize({ Kwidth:width, Kheight:height });
            }
        });

        observer.observe(element);

        // Cleanup on unmount
        return () => observer.disconnect();
    }, []);

    return size;
}