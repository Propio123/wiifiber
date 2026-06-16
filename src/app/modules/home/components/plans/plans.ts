import { Component } from '@angular/core';
import { ContactService } from '../../../../core/services/contact';

@Component({
  selector: 'app-plans',
  imports: [],
  templateUrl: './plans.html',
  styleUrl: './plans.css',
})
export class Plans {
   constructor(private contactService: ContactService) {}

  onContact(plan: string) {
    this.contactService.sendWhatsApp(plan);
  }
}
