export interface ISWAPIResource {
  url:string
  [key: string]: string | string[];
}

export interface ISWAPISearch {
  count: string;
  next: string;
  previous: string;
  results: ISWAPIResource[];
}

export interface IPeople {
  name?: string;
  eye_color?: string;
  gender?: string;
  hair_color?: string;
  height?: string;
  mass?: string;
  skin_color?: string;
  homeworld?: string;
  films?: string[];
  species?: string[];
  starships?: string[];
  vehicles?: string[];
  url?: string;
  created?: string;
  edited?: string;
}