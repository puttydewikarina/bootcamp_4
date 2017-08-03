import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  courseList : Object[] = [
    { "name":"ABC", "units":"30", "department":"Language", "assignment":"Alphabet" }
  ]
}
