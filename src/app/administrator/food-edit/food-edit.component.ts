import { Component, OnInit } from '@angular/core';
import { FoodService } from './food.service';
import { FoodEditModel } from './foodEditModel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.css']
})
export class FoodEditComponent implements OnInit{
  id:any
  form= new FoodEditModel
  dataView:any
 
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private foodEditService:FoodService
  ){

  }

  updateData(){
      console.log("id",this.id)
      console.log("data sebelum diubah",this.form)
      this.foodEditService.updateData(this.id,this.form).subscribe(res=>{
        alert('Data Berhasil Diubah')
        console.log('data Setelah dibuah',res)
        this.router.navigate(['/admin/food-list'])
      })
  }
  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.getById()
  }

  getById(){
    console.log("id",this.id)
    console.log("data sebelum diubah",this.form)
    this.foodEditService.getById(this.id).subscribe(res=>{
      this.dataView=res
      this.form=this.dataView
    })
  }
}
