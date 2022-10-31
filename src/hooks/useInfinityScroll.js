import { useCallback, useEffect } from 'react';

const useInfinityScroll = (obsRef, isLoading, isEndData, handleNextPage) => {
  const handlerObs = useCallback(
    (entries) => {
      const target = entries[0];

      if (!isLoading && !isEndData && target.isIntersecting) {
        handleNextPage((prev) => prev + 1);
      }
    },
    [isLoading, isEndData, handleNextPage]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handlerObs, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);

    return () => {
      observer.disconnect();
    };
  }, [obsRef, handlerObs]);
};

export default useInfinityScroll;
