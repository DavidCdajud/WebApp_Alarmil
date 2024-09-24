import { Component } from '@angular/core';

@Component({
  selector: 'app-alarmcreation',
  templateUrl: './alarmcreation.component.html',
  styleUrls: ['./alarmcreation.component.css']
})
export class AlarmcreationComponent {
  onSubmitAlarm() {
    // Lógica para manejar el envío del formulario
    console.log("Alarma creada");
  }
}