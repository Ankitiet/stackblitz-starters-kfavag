import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { BookingModule } from './modules/booking.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'booking',
    loadChildren: () =>
      import('./modules/booking.module').then((m) => m.BookingModule),
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BookingModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    TableModule,
    DropdownModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
