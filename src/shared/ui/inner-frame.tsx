import type { FC } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const InnerFrame: FC<Props> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        className="absolute inset-0 size-full"
        preserveAspectRatio="none"
      >
        {/* Рамка с срезанными углами под 45 градусов */}
        <path
          d="M40 20 L1160 20 L1180 40 L1180 760 L1160 780 L40 780 L20 760 L20 40 Z"
          fill="none"
          stroke="#718096"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />

        {/* Дополнительные линии для эффекта */}
        <path
          d="M30 30 L1170 30 M30 770 L1170 770"
          fill="none"
          stroke="#718096"
          strokeWidth="1"
          opacity="0.4"
        />
      </svg>

      {/* Контент */}
      <div className="relative z-10 size-full p-6">{children}</div>
    </div>
  );
};

export { InnerFrame };
