import { ContinentName } from "./ContinentName";
import { ContinentProperties } from "./ContinentProperties";

export type IContinents = {
  [key in ContinentName]: ContinentProperties;
};
