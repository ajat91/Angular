import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodDeleteModel } from './foodDeleteModel';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(
    private httpClient:HttpClient
  ) { }

  httpOptions :any
  url='http://localhost:8080/food'

  getDataFoods(){
    return this.httpClient.get(this.url+'/all',this.httpOptions)
  }

  deleteData(id:FoodDeleteModel){
    return this.httpClient.delete(this.url+'/delete/'+id)
  }
}
