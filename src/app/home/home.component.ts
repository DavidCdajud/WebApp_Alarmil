import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  // Método para redirigir a la pantalla de crear alarma
  goToCreateAlarm() {
    this.router.navigate(['/crear-alarma']);
  }
}
