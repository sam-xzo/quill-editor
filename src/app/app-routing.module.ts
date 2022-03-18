import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuillComponent } from './quill/quill.component';

const routes: Routes = [
  {
    path: '',
    component: QuillComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
