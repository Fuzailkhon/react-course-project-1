import { ISWAPIResource, ISWAPISearch } from './models';

const options = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
interface IFetchResource{
  prevPage?:string,
  currentPageResults?: ISWAPIResource[],
  nextPage?:string
}


export async function fetchResource(searchVal: string):Promise<IFetchResource> {
  if (searchVal.trim() === '') return {} 
  const url = `https://swapi.dev/api/people/?search=${searchVal}`;
  if (!url) return {};
  const response = await fetch(url, { headers: options })
  if (!response.ok) {
    console.log(response)
    return {};
  }
  const json: ISWAPISearch = await response.json();
  return {
    prevPage: json.previous,
    currentPageResults: json.results,
    nextPage: json.next,
  };
}