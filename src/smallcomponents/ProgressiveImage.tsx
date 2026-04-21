import React, { useState } from 'react';

type ProgressiveImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  style,
  onLoad,
  loading = 'lazy',
  decoding = 'async',
  ...imgProps
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad: React.ReactEventHandler<HTMLImageElement> = (event) => {
    setIsLoaded(true);
    onLoad?.(event);
  };

  return (
    <img
      {...imgProps}
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

