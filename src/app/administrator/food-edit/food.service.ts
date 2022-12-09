import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodEditModel } from './foodEditModel';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  url = 'http://localhost:8080/food'


  constructor(
    private httpClient :HttpClient
  ) { }

  getById(id: FoodEditModel){
      return this.httpClient.get(this.url + '/detail/' + id)
  }

  updateData(id: FoodEditModel,data:FoodEditModel){
    return this.httpClient.put(this.url + '/update/' + id,data)
  }
}
