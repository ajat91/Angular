import { Component, OnInit } from '@angular/core';
import { FoodService } from './food.service';
import { FoodDeleteModel } from './foodDeleteModel';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  dataFoods : any
  colTab=['No','Name','Regional','Description','Action']
  titlePage="List Foods"

  constructor(
    private foodService:FoodService
  ){}

  getDataFoods(){
    this.foodService.getDataFoods().subscribe(val=>{
        this.dataFoods=val
    })
  }

  ngOnInit(): void {
    this.getDataFoods()
  }

  deleteData(id:FoodDeleteModel){
    this.foodService.deleteData(id).subscribe(res=>{
      alert('Data Berhasil Dihapus')
      this.getDataFoods()
    })
  }
}
