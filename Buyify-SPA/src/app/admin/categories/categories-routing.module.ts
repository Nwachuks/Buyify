import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesComponent } from './categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';

const categoryRoutes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/add-category', component: AddCategoryComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(categoryRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class CategoriesRoutingModule { }
