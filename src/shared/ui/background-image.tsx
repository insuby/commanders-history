import type { FC } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const BackgroundImage: FC<Props> = ({ children, className = '' }) => {
  return (
    <div
      className={`relative ${className}`}
      style={{
        // aspectRatio: '1848/2960',
        aspectRatio: '1200/1920',
      }}
    >
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/Mission.png)',
          // filter: 'brightness(0.3) contrast(1.2)'
        }}
      />

      {/* Градиентный оверлей для лучшей читаемости */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80" />

      {/* Контент */}
      <div className="relative z-10 h-screen w-full">{children}</div>
    </div>
  );
};

export { BackgroundImage };
