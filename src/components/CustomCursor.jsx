import { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const updateCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable = 
                target.tagName === 'A' || 
                target.tagName === 'BUTTON' || 
                target.closest('a') || 
                target.closest('button') ||
                target.style.cursor === 'pointer' ||
                window.getComputedStyle(target).cursor === 'pointer';
            
            setIsPointer(isClickable);
        };

        const handleMouseLeave = () => {
            setIsHidden(true);
        };

        const handleMouseEnter = () => {
            setIsHidden(false);
        };

        window.addEventListener('mousemove', updateCursor);
        window.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    return (
        <>
            {/* Main cursor dot */}
            <div
                className={`custom-cursor ${isPointer ? 'cursor-pointer' : ''} ${isHidden ? 'cursor-hidden' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
            {/* Cursor ring */}
            <div
                className={`custom-cursor-ring ${isPointer ? 'cursor-pointer' : ''} ${isHidden ? 'cursor-hidden' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
        </>
    );
};

export default CustomCursor;
