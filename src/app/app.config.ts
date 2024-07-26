import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {  BrowserModule } from '@angular/platform-browser';


import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     HttpClient,
     NgModel,
     FormsModule,
     BrowserModule,
     CommonModule, provideAnimationsAsync(),
     
     
    ]
};
