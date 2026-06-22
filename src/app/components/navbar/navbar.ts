import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink], // Importamos RouterLink para el reporte
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
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
  closeMenu() {
    this.isMenuOpen = false;
  }

  private performScroll(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

