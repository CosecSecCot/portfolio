import { useEffect, useState } from 'react';

export const useNoHover = () => {
  const [isNoHover, setIsNoHover] = useState(false);

  useEffect(() => {
    // Only run on the client side
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(pointer: coarse)');

    const handleMediaQueryChange = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => {
      setIsNoHover(e.matches);
    };

    // Set initial state based on the current match
    setIsNoHover(mediaQuery.matches);

    // Add the listener
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Cleanup listener
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []); // Empty dependency array ensures it runs only once on mount

  return isNoHover;
};