import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  isMenuOpen = false;

  constructor(private router: Router) {}

  toggleMenu() { 
    this.isMenuOpen = !this.isMenuOpen; 
  }

  // Para secciones DENTRO de la misma página (Home)
  scrollTo(elementId: string) {
    this.isMenuOpen = false; 
    
    // Si estamos en otra página (ej: reporte), volvemos al home primero
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.performScroll(elementId), 300);
      });
    } else {
      this.performScroll(elementId);
    }
  }

  private performScroll(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
