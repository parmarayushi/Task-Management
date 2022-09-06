import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//   {
//   path: '', component: ProjectListContainerComponent,
//   children: [
//     {
//       path: 'project-form',
//       component: ProjectFormContainerComponent
//     },
//     {
//       path: 'project-list',
//       component: ProjectListContainerComponent
//     },
//     {
//       path: '',
//       pathMatch: 'full',
//       redirectTo: 'project-list'
//     }
//   ]
// }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
