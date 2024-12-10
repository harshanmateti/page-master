import { useState, useEffect } from 'react';

function useHeaderScroll() {
  const [headerBgColor, setHeaderBgColor] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHeaderBgColor(scrollPosition > 250 ? '#29323c' : 'transparent');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return headerBgColor;
}

export default useHeaderScroll;