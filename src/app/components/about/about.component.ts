import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  name = signal('Shanath');
  role = signal('Front-end Developer | UX & UI');

  description =
    signal(`Soy desarrolladora web front-end con 6 años de experiencia, a lo largo de mi carrera he desarrollado múltiples aplicaciones web dando soluciones innovadoras, construyendo interfaces de
usuario intuitivas, accesibles y de alto rendimiento.
Actualmente, ocupo el puesto de líder técnico, lo que me ha permitido adquirir experiencia no solo en el desarrollo, sino también en la toma de decisiones técnicas y la gestión de proyectos.`);
}
