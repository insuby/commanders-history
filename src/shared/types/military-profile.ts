export type MilitaryProfile = {
  id: string;
  name: string;
  rank: string;
  image: string;
  birthDate: string;
  birthPlace: string;
  deathDate?: string;
  deathPlace?: string;
  branch: string;
  serviceYears: string;
  command: string;
  battles: string[];
  militaryService: string[];
  awards: Award[];
  portrait?: string;
  lifePhotos: LifePhoto[];
};

export type Award = {
  id: string;
  name: string;
  description?: string;
  image?: string;
};

export type LifePhoto = {
  id: string;
  src: string;
  alt: string;
  description?: string;
};
