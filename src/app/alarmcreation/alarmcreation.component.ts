import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alarmcreation',
  templateUrl: './alarmcreation.component.html',
  styleUrls: ['./alarmcreation.component.css']
})
export class AlarmcreationComponent {
  alarmForm!: FormGroup;
  showPopup = false;

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.alarmForm = this.fb.group({
      hora: ['', Validators.required],
      fecha: ['', Validators.required],
      mision: ['', Validators.required],
    });
  }

  onSubmitAlarm() {
    if (this.alarmForm.invalid) {
      return;
    }

    // Mostrar el popup si el formulario es válido
    this.showPopup = true;
    this.cd.detectChanges(); // Forzar la detección de cambios

    // Después de 3 segundos, ocultar el popup y redirigir a otra página
    setTimeout(() => {
      this.showPopup = false;
      this.cd.detectChanges();
      this.router.navigate(['/home']); // Redirigir a la página home
    }, 3000);
  }
}
