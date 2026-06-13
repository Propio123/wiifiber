import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html'
})
export class Hero {
  // Configuración de WhatsApp
  phoneNumber = '5939XXXXXXXXX'; // Tu número aquí
  message = '¡Hola WiiFiber! Quiero agendar mi instalación y aprovechar la promo de regreso a clases.';
  
  get whatsappLink(): string {
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
  }
}
