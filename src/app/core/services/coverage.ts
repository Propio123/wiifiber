import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CoverageService {
  // Lista de zonas con cobertura activa
  private coverageAreas = [
    'ibarra', 'naranjito', 'san cristobal', '19 de octubre','zuleta', 'la esperanza', 'caranqui', 'alpachaca', 'priorato', 'yahuarcocha', 
    'cayambe', 'tabacundo' // Próxima expansión
  ];

  checkCoverage(location: string): { status: boolean, message: string } {
    const normalized = location.toLowerCase().trim();
    const isCovered = this.coverageAreas.some(area => normalized.includes(area));
    
    if (isCovered) {
      return { status: true, message: '¡Excelente! Tenemos cobertura total en tu zona.' };
    } else {
      return { status: false, message: 'Aún no llegamos a tu sector, pero pronto estaremos ahí. ¡Déjanos tu contacto!' };
    }
  }
}