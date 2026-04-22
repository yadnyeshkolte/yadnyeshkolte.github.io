import React, { useState, useRef, useEffect } from 'react';

type ProgressiveImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  width?: number | string;
  height?: number | string;
};

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  style,
  onLoad,
  loading = 'lazy',
  decoding = 'async',
  ...imgProps
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Use IntersectionObserver for true deferred loading (tighter threshold than native lazy)
  useEffect(() => {
    if (loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading 200px before visible
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  const handleLoad: React.ReactEventHandler<HTMLImageElement> = (event) => {
    setIsLoaded(true);
    onLoad?.(event);
  };

  return (
    <img
      ref={imgRef}
      {...imgProps}
      src={isInView ? src : undefined}
      loading={loading}
      decoding={decoding}
      onLoad={handleLoad}
      style={{
        ...style,
        opacity: isLoaded ? 1 : 0.45,
        filter: isLoaded ? 'blur(0px)' : 'blur(10px)',
        transition: 'opacity 250ms ease-out, filter 300ms ease-out',
        backgroundColor: 'rgba(148, 163, 184, 0.2)',
      }}
    />
  );
};

export default ProgressiveImage;
