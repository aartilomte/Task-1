import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { KeyValuePipe } from '@angular/common';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './shared/http.service';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatButtonModule,
    MatDialogActions,
    ReactiveFormsModule,
    HttpClientModule,
    
    
    
  ],
  providers: [
    HttpService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


