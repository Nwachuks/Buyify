import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
//   { path: '**', redirectTo: '', pathMatch: 'full' }
// ];

const routes: Routes = [
  { path: '', redirectTo: '/admin/pages', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
