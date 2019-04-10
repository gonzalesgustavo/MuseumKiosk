import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DinosaursComponent } from './dinosaurs/dinosaurs.component';
const routes: Routes = [
	{
		path: '',
		component: DinosaursComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
