import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'; 
import { AlarmcreationComponent } from './alarmcreation/alarmcreation.component';
import { FeedbackComponent } from './feedback/feedback.component'; 
import { DetalleMisionComponent } from './detalle-mision/detalle-mision.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }, 
  { path: 'crear-alarma', component: AlarmcreationComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'detalle-mision', component: DetalleMisionComponent } // Nueva ruta para Detalle Misión
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
