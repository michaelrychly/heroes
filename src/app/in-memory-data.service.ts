import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
  const heroes = [
  {id: 11, name: 'AB'},
  {id: 12, name: 'CD'},
  {id: 13, name: 'DE'},
  {id: 14, name: 'EF'},
  {id: 15, name: 'FG'},
  {id: 16, name: 'GH'},
  {id: 17, name: 'HI'},
  {id: 18, name: 'IJ'},
  {id: 19, name: 'KL'},
  {id: 20, name: 'LM'}
  ]
  return {heroes};
  }
}