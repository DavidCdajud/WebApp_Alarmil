import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { AlarmcreationComponent } from './alarmcreation/alarmcreation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';
import { DetalleMisionComponent } from './detalle-mision/detalle-mision.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

@NgModule({
  declarations: [		
    AppComponent,
    LoginComponent,
      HomeComponent,
      AlarmcreationComponent,
      FeedbackComponent,
      DetalleMisionComponent,
      LoadingScreenComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }