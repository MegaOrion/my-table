import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { TableHost } from './table/table-host.component';
import { AppComponent } from './app.component';
import { MyTable } from './table/my-table/my-table.component';

@NgModule({
  declarations: [
    TableHost,
    MyTable,
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
