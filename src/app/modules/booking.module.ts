import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { BookMeetingComponent } from './booking/booking.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [BookMeetingComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: BookMeetingComponent, canActivate: [AuthGuard] },
    ]),
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    TableModule,
    DropdownModule,
  ],
  providers: [],
})
export class BookingModule {}
