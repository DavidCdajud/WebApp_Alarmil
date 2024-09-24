import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPopup = false;
  showError = false; // Nuevo estado para el mensaje de error
  
  identificacion: string = '';
  password: string = '';

  constructor(private cd: ChangeDetectorRef) {}

  onSubmit() {
    // Validar si los campos están completos
    if (this.identificacion.trim() === '' || this.password.trim() === '') {
      this.showError = true; // Mostrar mensaje de error
      this.cd.detectChanges();

      // Ocultar el mensaje de error después de 3 segundos
      setTimeout(() => {
        this.showError = false;
        this.cd.detectChanges();
      }, 3000);
      return; // Detener el proceso si los campos están vacíos
    }

    // Mostrar el popup si los campos están completos
    this.showPopup = true;
    this.cd.detectChanges(); // Forzar la detección de cambios

    // Ocultar el popup después de 3 segundos
    setTimeout(() => {
      this.showPopup = false;
      this.cd.detectChanges(); // Forzar la detección de cambios nuevamente
    }, 3000);
  }
}
