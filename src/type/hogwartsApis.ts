type HouseHead = {
  id: string;
  firstName: string;
  lastName: string;
};

type HouseTrait = {
  id: string;
  name: string;
};

export type House = {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
  element: string;
  ghost: string;
  commonRoom: string;
  heads: HouseHead[];
  traits: HouseTrait[];
};

export type HogwartsHousesResponse = House[];
