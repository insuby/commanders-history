import { Marquee } from '@devnomic/marquee';

import type { FC } from 'react';

import type { MilitaryProfile } from 'shared/types/military-profile';
import {
  BackgroundImage,
  InnerFrame,
  Medal,
  OuterFrame,
  PhotoMarquee,
  PortraitFrame,
} from 'shared/ui';

type Props = {
  profile: MilitaryProfile;
};

const MilitaryProfileWidget: FC<Props> = ({ profile }) => {
  // Разделяем награды на 3 в ряд
  const awardsPerRow = 3;
  const awardRows = [];
  for (let i = 0; i < profile.awards.length; i += awardsPerRow) {
    awardRows.push(profile.awards.slice(i, i + awardsPerRow));
  }

  return (
    <BackgroundImage className="military-gradient m-auto h-full w-full overflow-hidden p-6">
      <OuterFrame className="h-full">
        <InnerFrame className="h-full">
          <div className="grid h-full grid-cols-2 gap-4 px-2 py-16">
            {/* Левая панель - информация */}
            <div className="space-y-4">
              <p className="font-rubik text-xl italic text-gray-400">
                {profile.rank}
              </p>
              {/* Заголовок */}
              <div className="space-y-4">
                <h1 className="mb-2 font-rubik text-4xl font-bold tracking-wide text-white">
                  {profile.name}
                </h1>
              </div>
              <hr className="bg-[#718096]" />
              {/* Биографические данные */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-700/50 py-2">
                  <span className="font-medium text-gray-400">
                    Дата рождения:
                  </span>
                  <span className="text-right text-xs text-white">
                    {profile.birthDate}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-700/50 py-2">
                  <span className="font-medium text-gray-400">
                    Место рождения:
                  </span>
                  <span className="text-right text-xs text-white">
                    {profile.birthPlace}
                  </span>
                </div>
                {profile.deathDate && (
                  <div className="flex items-center justify-between border-b border-gray-700/50 py-2">
                    <span className="font-medium text-gray-400">
                      Дата смерти:
                    </span>
                    <span className="text-right text-xs text-white">
                      {profile.deathDate}
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between border-b border-gray-700/50 py-2">
                  <span className="whitespace-pre-wrap font-medium text-gray-400">
                    {`Период руководства\nГОМУ ГШ:`}
                  </span>
                  <span className="text-right text-xs text-white">
                    {profile.serviceYears}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="flex w-3/4 font-medium text-gray-400">
                    Участие в БД:
                  </span>
                  <span className="whitespace-pre-wrap text-right text-xs text-white">
                    {profile.battles.join('\n ')}
                  </span>
                </div>
                <div className="flex justify-between gap-2 py-2">
                  <span className="flex w-3/4 font-medium text-gray-400">
                    Военная служба:
                  </span>
                  <Marquee
                    fade
                    direction="up"
                    className="h-72 whitespace-pre-wrap  text-xs text-white [--duration:200s]"
                  >
                    {profile.militaryService
                      .map(
                        (service, index) =>
                          `${service}${
                            index < profile.militaryService.length - 1
                              ? '\n\n'
                              : ''
                          }`,
                      )
                      .join('')}
                  </Marquee>
                </div>
              </div>
            </div>

            {/* Правая панель - портрет и награды */}
            <div className="space-y-6">
              {/* Портрет */}
              <div
                className="flex flex-col items-center"
                style={{
                  aspectRatio: '3/4',
                }}
              >
                <PortraitFrame className="mb-4 size-full">
                  <img
                    src={profile.image}
                    alt="Портрет"
                    className="size-full object-cover"
                  />
                </PortraitFrame>
              </div>

              {/* Награды с marquee */}
              <div className="space-y-4">
                <h2 className="mb-6 flex items-center text-xl font-black text-white">
                  <span className="mr-3 h-12 w-1 rounded bg-white "></span>
                  Государственные и ведомственные награды
                </h2>

                {/* Вертикальный marquee для наград */}
                <div className="h-72 overflow-auto">
                  <Marquee
                    fade
                    direction="up"
                    className="h-full"
                    innerClassName="!gap-1"
                  >
                    {awardRows.map((row, rowIndex) => (
                      <div key={rowIndex} className="flex justify-center gap-1">
                        {row.map((award) => (
                          <div
                            key={award.id}
                            className={`award-item group cursor-pointer rounded-lg p-2 transition-all duration-300 hover:scale-105 ${
                              award.name.includes('Октябрьской') 
                                ? 'bg-gradient-to-br from-red-600/30 to-red-800/30 border border-red-400/50'
                                : award.name.includes('Красного Знамени')
                                ? 'bg-gradient-to-br from-red-500/30 to-red-700/30 border border-red-300/50'
                                : award.name.includes('Отечественной')
                                ? 'bg-gradient-to-br from-orange-600/30 to-orange-800/30 border border-orange-400/50'
                                : award.name.includes('Трудового')
                                ? 'bg-gradient-to-br from-yellow-600/30 to-yellow-800/30 border border-yellow-400/50'
                                : award.name.includes('Красной звезды')
                                ? 'bg-gradient-to-br from-red-400/30 to-red-600/30 border border-red-300/50'
                                : award.name.includes('За службу Родине')
                                ? 'bg-gradient-to-br from-blue-600/30 to-blue-800/30 border border-blue-400/50'
                                : 'bg-gradient-to-br from-gray-600/30 to-gray-800/30 border border-gray-400/50'
                            }`}
                          >
                            <div className="flex flex-col items-center space-y-2">
                              <Medal
                                src={award.image || "/medal.png"}
                                alt="Военная медаль"
                                variant="black"
                                className="size-full"
                                style={{
                                  filter: award.name.includes('Октябрьской') 
                                    ? 'brightness(1.1) contrast(1.1) saturate(1.5)'
                                    : award.name.includes('Красного Знамени')
                                    ? 'brightness(1.05) contrast(1.05) saturate(1.4)'
                                    : award.name.includes('Отечественной')
                                    ? 'brightness(1.1) contrast(1.1) saturate(1.6) hue-rotate(15deg)'
                                    : award.name.includes('Трудового')
                                    ? 'brightness(1.05) contrast(1.05) saturate(1.3) hue-rotate(45deg)'
                                    : award.name.includes('Красной звезды')
                                    ? 'brightness(1.0) contrast(1.0) saturate(1.2)'
                                    : award.name.includes('За службу Родине')
                                    ? 'brightness(1.1) contrast(1.1) saturate(1.4) hue-rotate(200deg)'
                                    : 'brightness(1.0) contrast(1.0) saturate(1.0)'
                                }}
                              />
                              <p
                                className="hyphens-auto break-words text-center text-xs font-medium leading-tight text-gray-300"
                                style={{
                                  wordBreak: 'normal',
                                  overflowWrap: 'normal',
                                  hyphens: 'none',
                                  wordSpacing: '0.1em',
                                  minWidth: '0',
                                  orphans: '3',
                                  widows: '3',
                                  whiteSpace: 'normal',
                                }}
                              >
                                {award.name}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          </div>

          {/* Горизонтальная бегущая строка с фото */}
          <div className="absolute inset-x-0 bottom-0 -z-10 -skew-y-6">
            <PhotoMarquee lifePhotos={profile.lifePhotos} className="w-full" />
          </div>
        </InnerFrame>
      </OuterFrame>
    </BackgroundImage>
  );
};

export { MilitaryProfileWidget };
