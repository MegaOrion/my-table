import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableHost } from './table/table-host.component'


const routes: Routes = [
  {path: '', component: TableHost}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
