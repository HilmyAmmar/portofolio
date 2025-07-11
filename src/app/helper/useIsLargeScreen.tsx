import { useEffect, useState } from 'react';

export function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 100000px)'); // Tailwind lg = 1024px
    setIsLarge(mediaQuery.matches);

    const handleResize = () => setIsLarge(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return isLarge;
}
