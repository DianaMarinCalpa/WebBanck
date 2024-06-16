import { RouterModule, Routes } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
export const routes: Routes = [
     {
         path:'',
         loadChildren:()=> import('./pages/user/user.routes').then(m=>m.USER_ROUTES)
     }
];
