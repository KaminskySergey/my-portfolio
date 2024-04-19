'use client'
import { useState, useEffect } from 'react'
import NumberAnimation from './NumberAnimation';
interface IProgressBar {
    text: string,
    percent: number,
    color: string,
}

const ProgressBar = ({ text, percent, color }: IProgressBar) => {
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
        setWidth(percent);
    }, [percent]);


    const defaultColor = 'bg-gray-500 text-gray-500';


    const progressBarColorClass = (() => {
        switch (color) {
            case 'red':
                return 'bg-red-500 text-red-500';
            case 'yellow':
                return 'bg-yellow-500 text-yellow-500';
            case 'blue':
                return 'bg-blue-500 text-blue-500';
            case 'purple':
                return 'bg-purple-500 text-purple-500';
            case 'green':
                return 'bg-green-500 text-green-500';
            default:
                return defaultColor;
        }
    })();

    

    return (
        <>
            <div>
                <div className={`flex justify-between mb-1 ${progressBarColorClass}`} style={{ background: '#F2F3F5' }}>
                    <span className={`text-base font-medium dark:text-white`}>{text}</span>
                    <span className={`text-sm font-medium  dark:text-white`}>
                        <NumberAnimation value={percent} duration={1000} />
                    </span>
                </div>
                <div className={`w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 relative overflow-hidden`}>
                    <div className={`h-2.5 rounded-full duration-300 ${progressBarColorClass}`} style={{ width: `${width}%`, transition: 'width 1s cubic-bezier(0.42, 0, 0.58, 1)' }} />
                </div>
            </div>
        </>
    );
};

export default ProgressBar;

