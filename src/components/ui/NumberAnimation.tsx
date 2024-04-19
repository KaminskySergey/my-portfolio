'use client'
import { useState, useEffect } from 'react'

const NumberAnimation = ({ value, duration }: { value: number, duration: number }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = Math.ceil(value / (duration / 20));

        const interval = setInterval(() => {
            start += increment;
            if (start >= value) {
                clearInterval(interval);
                start = value;
            }
            setDisplayValue(start);
        }, 20);

        return () => clearInterval(interval);
    }, [value, duration]);

    return <span>{displayValue}%</span>;
};

export default NumberAnimation;