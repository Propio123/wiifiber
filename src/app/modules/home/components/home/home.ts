import { Component } from '@angular/core';
import { ContactService } from '../../../../core/services/contact';
import { CheckComponent } from "../../../coverage/components/check/check";
import { Report } from "../../../support/components/report/report";
import { Plans } from "../plans/plans";
import { Test } from "../../../speedtest/components/test/test";
import { Hero } from "../hero/hero";


@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [CheckComponent, Plans, Test, Hero]
})
export class HomeComponent {
  
}