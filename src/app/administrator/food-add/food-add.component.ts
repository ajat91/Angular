import { Component } from '@angular/core';
import { FoodAddModel } from './foodAddModel';
import { FoodsAddService } from './foods-add.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent {
  title ='Add Foods'
  form = new FoodAddModel

  constructor(
    private foodAddService:FoodsAddService,
    private router:Router
  ){}

  insertData(){
      //console.log(this.form,"data masuk")
      this.foodAddService.insertData(this.form).subscribe(res=>{
        alert("Data Berhasil Disimpan")
        this.router.navigate(['/admin/food-list'])
      })
  }

  ngOnInit(): void {
    //this.getDataFoods()
  }
}
