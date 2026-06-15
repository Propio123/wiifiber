import { Component } from '@angular/core';
import { ContactService } from '../../../../core/services/contact';
import { CheckComponent } from "../../../coverage/components/check/check";
import { TestComponent } from "../../../speedtest/components/test/test";

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [CheckComponent, TestComponent]
})
export class HomeComponent {
  constructor(private contactService: ContactService) {}

  onContact(plan: string) {
    this.contactService.sendWhatsApp(plan);
  }
}