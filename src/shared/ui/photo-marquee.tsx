import { Marquee } from '@devnomic/marquee';

import type { FC } from 'react';

import type { LifePhoto } from 'shared/types/military-profile';

import { PortraitFrame } from './portrait-frame';

type Props = {
  lifePhotos: LifePhoto[];
  className?: string;
};

const PhotoMarquee: FC<Props> = ({ lifePhotos, className = '' }) => {
  return (
    <div className={`h-96 overflow-hidden ${className}`}>
      <Marquee
        fade
        direction="left"
        numberOfCopies={2}
        className="h-full overflow-visible"
        innerClassName="!gap-0 overflow-visible"
      >
        <div className="rotate-20 flex h-full items-center gap-1 overflow-visible">
          {lifePhotos.map((photo) => (
            <div key={photo.id} className="h-64 w-80 shrink-0 scale-110">
              <PortraitFrame className="size-full">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="size-full object-cover"
                  style={{
                    filter:
                      'brightness(0.5) contrast(1.3) saturate(0.8) blur(0.5px)',
                  }}
                />
              </PortraitFrame>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export { PhotoMarquee };
