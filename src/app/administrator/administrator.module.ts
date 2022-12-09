import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { FoodComponent } from './food/food.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodAddComponent } from './food-add/food-add.component';
import { FormsModule } from '@angular/forms';
import { FoodEditComponent } from './food-edit/food-edit.component';

const routes : Routes=[
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path:'',
        redirectTo:'/admin/home',
        pathMatch:'full'
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'food-list',
        component:FoodComponent
      },
      {
        path:'setting',
        component:SettingComponent
      },
      {
        path:'add-foods',
        component:FoodAddComponent
      },
      {
        path:'edit-foods/:id',
        component:FoodEditComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    SettingComponent,
    FoodComponent,
    FoodAddComponent,
    FoodEditComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class AdministratorModule { }
