'use client'
import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// 1. Jelly Cursor Component 鼠标交互
export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      // window.removeEventListener('mousemove', moveCursor);
      // window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-black pointer-events-none z-[9999] hidden md:block mix-blend-difference bg-white"
      style={{ x: cursorXSpring, y: cursorYSpring }}
      animate={{ scale: isHovering ? 2.5 : 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
}
