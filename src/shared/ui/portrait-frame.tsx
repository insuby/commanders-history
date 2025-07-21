import type { FC } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const PortraitFrame: FC<Props> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Контент портрета с обрезкой по рамке */}
      <div className="relative z-10 size-full p-4">
        <div
          className="size-full overflow-hidden"
          style={{
            clipPath:
              'polygon(2% 5%, 98% 5%, 95% 2%, 5% 2%, 2% 5%, 2% 95%, 5% 98%, 95% 98%, 98% 95%, 98% 5%)',
          }}
        >
          {children}
        </div>
      </div>

      {/* Рамка поверх фото */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 280"
        className="absolute inset-0 z-20 size-full"
        preserveAspectRatio="none"
      >
        {/* Рамка с срезанными углами под 45 градусов */}
        <path
          d="M20 10 L180 10 L190 20 L190 260 L180 270 L20 270 L10 260 L10 20 Z"
          fill="none"
          stroke="#718096"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export { PortraitFrame };
