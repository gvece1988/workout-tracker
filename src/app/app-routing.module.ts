import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { CategoryComponent } from './category/category.component'

const routes: Routes = [{ path: "category", component: CategoryComponent }]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }