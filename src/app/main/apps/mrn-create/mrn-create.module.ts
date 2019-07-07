import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrnCreateComponent } from './mrn-create.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule,
  MatIconModule, MatInputModule, MatSelectModule,
  MatStepperModule,
  MatDatepickerModule,
  MatTableModule,
  MatPaginatorModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '**',
    component: MrnCreateComponent,
    resolve: {
    }
  }
];


@NgModule({
  declarations: [MrnCreateComponent],
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule

  ],
  exports: [

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatDatepickerModule,
    MatTableModule,
    MatPaginatorModule

]
})
export class MrnCreateModule { }
