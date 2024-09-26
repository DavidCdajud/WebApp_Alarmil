import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  showPopupMessage = false;
  popupMessage = '';

  // Función para mostrar el popup con el mensaje adecuado
  showPopup(message: string) {
    this.popupMessage = message;
    this.showPopupMessage = true;

    // Ocultar el popup después de 3 segundos
    setTimeout(() => {
      this.showPopupMessage = false;
    }, 3000);
  }
}