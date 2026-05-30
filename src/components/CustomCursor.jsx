import React, { useEffect, useRef, useState } from 'react';
import { MousePointer2 } from 'lucide-react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      
      const target = e.target;
      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button');
        
      setIsPointer((prev) => {
        if (prev !== !!isClickable) return !!isClickable;
        return prev;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div 
      ref={cursorRef}
      className={`custom-arrow-cursor ${isPointer ? 'pointer' : ''}`} 
      style={{ 
        left: '-100px', 
        top: '-100px' 
      }} 
    >
      <MousePointer2 
        size={isPointer ? 32 : 24} 
        color={isPointer ? 'var(--accent-primary)' : 'var(--text-primary)'} 
        fill={isPointer ? 'rgba(0, 255, 135, 0.2)' : 'transparent'}
        style={{
          transition: 'all 0.15s ease',
          transform: isPointer ? 'rotate(-10deg) translate(-2px, -2px)' : 'rotate(0deg) translate(-2px, -2px)'
        }}
      />
    </div>
  );
};

export default CustomCursor;
