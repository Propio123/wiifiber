import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  templateUrl: './test.html'
})
export class TestComponent {
  // Ya no necesitamos ngOnInit, ni loadScript, ni la variable scriptLoaded.
  // ¡Tu clase ahora es mínima y eficiente!
}