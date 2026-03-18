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
  description = signal(`
    Desarrolladora web front-end especializada en Angular.
    Con más de 5 años de experiencia, me he enfocado en construir interfaces de usuario intuitivas, accesibles y con un alto rendimiento.
    Actualmente, ocupo el puesto de líder técnico, lo que me ha permitido adquirir experiencia no solo en el desarrollo, sino también en la toma de decisiones técnicas y la gestión de proyectos. He tenido la oportunidad de trabajar en diversos proyectos, tanto en entornos colaborativos como en solitario, lo que ha ampliado mis habilidades y conocimientos.
  `);
}
