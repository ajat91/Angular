import { NgModule } from "@angular/core";
import {Routes,RouterModule} from '@angular/router';


const routes:Routes =[
    {
        path:'admin',
        loadChildren:()=>import('./administrator/administrator.module').then(mod=>mod.AdministratorModule)
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
