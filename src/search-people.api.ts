import { IPeople, ISWAPIResource, ISWAPISearch } from './models';

const OPTIONS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

type ISearchResourceObj = {
  prevPage: string;
  nextPage: string;
  BASE_URL: string;
  searchVal: string;
  resultsCount: number;
  numberOfPages: () => number;
  currenPageResults: ISWAPIResource[];
  fetchResource: (url: string) => void;
  searchForPeople: (searchVal: string, page: number) => void;
  getDetails: (id:string) => Promise<IPeople | null>;
};

export const SearchPeopleObj: ISearchResourceObj = {
  prevPage: '',
  nextPage: '',
  resultsCount: 0,
  searchVal: '',
  BASE_URL: 'https://swapi.dev/api/people/',
  currenPageResults: [],
  numberOfPages(){
    return Math.ceil(this.resultsCount / this.currenPageResults.length)
  },
  async fetchResource(url) {
    if (!url) return "ERROR";
    const response = await fetch(url, { headers: OPTIONS });
    this.currenPageResults = []
    if (!response.ok) {
      console.log(response);
      return;
    }
    const json: ISWAPISearch = await response.json();
    this.currenPageResults = json.results;
    this.prevPage = json.previous || '';
    this.nextPage = json.next || '';
    this.resultsCount = parseInt(json.count)
  },
  async searchForPeople(searchVal: string, page: number = 0) {
    searchVal = searchVal.trim();
    if (!searchVal) return 'NOT_FOUND';
    let searchURL = this.BASE_URL + `?search=${searchVal}`;
    if (page && page > 0 && page !== 1){
      searchURL = searchURL.concat(`&page=${page}`)
    }
    await this.fetchResource(searchURL);
    this.searchVal = searchVal
    return 'DONE';
  },
  async getDetails(id:string){
    if (!id) return null
    const searchURL = this.BASE_URL + id
    const response = await fetch(searchURL, { headers: OPTIONS });
    this.currenPageResults = []
    if (!response.ok) {
      console.log(response);
      return null;
    }
    const json: IPeople = await response.json();
    console.log(json)
    return json
  }
};
