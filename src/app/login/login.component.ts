import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router'; // Asegúrate de importar el Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPopup = false;
  showError = false; // Estado para el mensaje de error
  
  identificacion: string = '';
  password: string = '';

  // Inyecta el Router en el constructor
  constructor(private cd: ChangeDetectorRef, private router: Router) {}

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

    // Después de 3 segundos, oculta el popup y redirige a la página home
    setTimeout(() => {
      this.showPopup = false;
      this.cd.detectChanges();
      this.router.navigate(['/home']); // Redirigir a la página home
    }, 3000);
  }
}
