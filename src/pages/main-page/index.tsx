import { MilitaryProfileWidget } from 'widgets';

import { testMilitaryProfile } from 'shared/constants/military-data';

export const MainPage = () => {
  return <MilitaryProfileWidget profile={testMilitaryProfile} />;
};
