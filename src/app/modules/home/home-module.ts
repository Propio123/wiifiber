import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { HomeComponent } from './components/home/home';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeComponent // El módulo de rutas va aquí
  ]
})
export class HomeModule { }