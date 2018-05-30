import { StorageService } from './shared/services/storage.service';
import { CategoryService } from './category/category.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CategoryService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
