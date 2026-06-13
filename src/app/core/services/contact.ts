import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly phoneNumber = '593969743150'; // Reemplaza con tu número real

  sendWhatsApp(planName: string) {
    const message = `¡Hola WiiFiber! Me interesa el plan *${planName}*. Quisiera agendar mi instalación y aprovechar la promo de regreso a clases.`;
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}