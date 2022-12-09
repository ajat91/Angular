import { Injectable } from '@angular/core';
import { FoodAddModel } from './foodAddModel';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FoodsAddService {

  constructor(
    private httpClient : HttpClient
  ) { }
  
    url='http://localhost:8080/food'
    
    insertData(data : FoodAddModel){
      console.log(data,"data")
      return this.httpClient.post(this.url+'/create',data)
    }
}
