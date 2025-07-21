import type { FC } from 'react';
import { Medal } from './medal';

type Props = {
  className?: string;
};

const AnimatedAwards: FC<Props> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute -left-20 -top-20 h-[calc(100%+40px)] w-[calc(100%+40px)]">
        {/* Первый ряд марок */}
        <div className="absolute left-0 top-0 h-full w-full animate-marquee-diagonal">
          <div className="flex h-full w-full transform -rotate-12">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="mx-8 flex h-32 w-24 flex-col items-center justify-center rounded-lg bg-gradient-to-b from-yellow-400/20 to-yellow-600/20 border border-yellow-400/30 backdrop-blur-sm"
              >
                <Medal 
                  src="/medal.jpg" 
                  alt="Военная медаль" 
                  className="h-20 w-16"
                />
                <div className="text-xs text-yellow-300/70 text-center mt-2">Награда</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Второй ряд марок (смещенный) */}
        <div className="absolute left-0 top-0 h-full w-full animate-marquee-diagonal-reverse">
          <div className="flex h-full w-full transform rotate-12">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="mx-12 flex h-28 w-20 flex-col items-center justify-center rounded-lg bg-gradient-to-b from-blue-400/20 to-blue-600/20 border border-blue-400/30 backdrop-blur-sm"
              >
                <Medal 
                  src="/medal.jpg" 
                  alt="Военная медаль" 
                  className="h-16 w-12"
                />
                <div className="text-xs text-blue-300/70 text-center mt-1">Орден</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Третий ряд марок */}
        <div className="absolute left-0 top-0 h-full w-full animate-marquee-diagonal-slow">
          <div className="flex h-full w-full transform -rotate-6">
            {Array.from({ length: 25 }).map((_, i) => (
              <div
                key={i}
                className="mx-6 flex h-24 w-16 flex-col items-center justify-center rounded-lg bg-gradient-to-b from-red-400/20 to-red-600/20 border border-red-400/30 backdrop-blur-sm"
              >
                <Medal 
                  src="/medal.jpg" 
                  alt="Военная медаль" 
                  className="h-12 w-8"
                />
                <div className="text-xs text-red-300/70 text-center mt-1">Медаль</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { AnimatedAwards }; 