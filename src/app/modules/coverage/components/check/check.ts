import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoverageService } from '../../../../core/services/coverage';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-check',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './check.html'
})
export class CheckComponent {
  location = '';
  // Esto evita el error de raíz
result: { status: boolean, message: string } = { status: false, message: '' };

  constructor(private coverageService: CoverageService) {}

  onVerify() {
    this.result = this.coverageService.checkCoverage(this.location);
    console.log(this.result!.status);
  }
}
