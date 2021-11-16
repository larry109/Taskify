import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TacheComponent } from './tache/tache.component';
import { GoogleloginComponent } from './googlelogin/googlelogin.component';

const routes: Routes = [{ path: 'taskify', component: TacheComponent },{ path: '', component: GoogleloginComponent }]; //route 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
