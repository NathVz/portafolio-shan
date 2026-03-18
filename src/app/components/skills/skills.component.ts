import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = [
    {
      name: 'HTML',
      icon: 'img/icons/html-5.png',
      percentage: 90,
      level: 'Avanzado',
    },
    {
      name: 'CSS',
      icon: 'img/icons/css.png',
      percentage: 90,
      level: 'Avanzado',
    },
    {
      name: 'JavaScript',
      icon: 'img/icons/javascript.png',
      percentage: 80,
      level: 'Avanzado',
    },
    {
      name: 'SCSS',
      icon: 'img/icons/scss.png',
      percentage: 60,
      level: 'Intermedio',
    },
    {
      name: 'Typescript',
      icon: 'img/icons/typescript.png',
      percentage: 70,
      level: 'Intermedio',
    },
    {
      name: 'Angular',
      icon: 'img/icons/Angular.png',
      percentage: 80,
      level: 'Avanzado',
    },
    {
      name: 'React',
      icon: 'img/icons/React.png',
      percentage: 50,
      level: 'Intermedio',
    },
  ];

  technologies = [
    {
      name: 'Github',
      icon: 'img/icons/github.png',
      percentage: 70,
      level: 'Intermedio',
    },
    {
      name: 'Gitlab',
      icon: 'img/icons/gitlab.png',
      percentage: 70,
      level: 'Intermedio',
    },
    {
      name: 'Postman',
      icon: 'img/icons/Postman.png',
      percentage: 50,
      level: 'Intermedio',
    },
  ];
}
