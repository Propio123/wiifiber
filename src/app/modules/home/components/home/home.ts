import { Component } from '@angular/core';
import { ContactService } from '../../../../core/services/contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.html'
})
export class HomeComponent {
  constructor(private contactService: ContactService) {}

  onContact(plan: string) {
    this.contactService.sendWhatsApp(plan);
  }
}