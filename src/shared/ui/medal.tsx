import type { FC, CSSProperties } from 'react';

type Props = {
  src: string;
  alt: string;
  className?: string;
  variant?: 'default' | 'black';
  style?: CSSProperties;
};

const Medal: FC<Props> = ({
  src,
  alt,
  className = '',
  variant = 'default',
  style,
}) => {
  const isBlack = variant === 'black';

  return (
    <div className={`relative ${className} whitespace-pre-wrap`}>
      {/* Изображение с фильтрами для удаления белого фона */}
      <img
        src={src}
        alt={alt}
        className="mx-auto size-1/2 object-contain"
        style={{
          filter: isBlack
            ? 'brightness(0) contrast(0) saturate(0) invert(0) hue-rotate(0deg)'
            : style?.filter || 'brightness(1.1) contrast(1.25) saturate(1.2)',
          ...style,
        }}
      />
    </div>
  );
};

export { Medal };
