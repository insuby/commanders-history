import type { FC } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const OuterFrame: FC<Props> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1374 787"
        className="absolute inset-0 size-full"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Внешняя рамка с отступами */}
        <path
          d="M83.5 24.5H428.5L434 30H551M677 26.5H750M860 26.5H979L985 20.5H1330.5L1352 42V63M1344.5 24L1370 49.5V106.5L1364 112.5V194L1393 223V276.5L1387.5 282V366.5M1387.5 464V548.5L1393 554V606.5L1364 635.5V717L1371 724V777M1331 805.5H985.5L980 800H859.5M551 800H435L429.5 805.5H83.5L62 784V765.5M44 51.5V107.5L50 113.5V194.5L20.5 224V277L26 282.5V366.5M26 465.5V548L20.5 553.5V608L50 637.5V717L44 723V776.5L71.5 804"
          stroke="#4a5568"
        />
        <path d="M20.5 277L26 282.5" stroke="#4a5568" opacity="0.7" />
        <path d="M26.5 548L21 553.5" stroke="#4a5568" opacity="0.7" />
        <path d="M430 805.5L435.5 800" stroke="#4a5568" opacity="0.7" />
        <path d="M980 801L985.5 806.5" stroke="#4a5568" opacity="0.7" />
        <path d="M1393 276L1387.5 281.5" stroke="#4a5568" opacity="0.7" />
        <path d="M1387 548L1392.5 553.5" stroke="#4a5568" opacity="0.7" />
      </svg>

      {/* Контент */}
      <div className="relative z-10 size-full p-8">{children}</div>
    </div>
  );
};

export { OuterFrame };
