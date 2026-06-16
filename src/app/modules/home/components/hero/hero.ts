import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html'
})
export class Hero {
  phoneNumber = '593980372883';
  message = '¡Hola WiiFiber! Quiero agendar mi instalación y aprovechar la promo de regreso a clases.';
   
  get whatsappLink(): string {
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
  }

  // Método dedicado para abrir el enlace
  abrirWhatsApp() {
    window.open(this.whatsappLink, '_blank');
  }
}
