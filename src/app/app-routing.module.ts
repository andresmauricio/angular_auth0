import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceComponent } from './components/price/price.component';
import { HomeComponent } from './components/home/home.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { CallbackComponent } from './components/callback/callback.component';


const routes: Routes = [
  {path: 'price', component: PriceComponent},
  {path: 'home', component: HomeComponent},
  {path: 'protected', component: ProtectedComponent},
  {path: 'callback', component: CallbackComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
