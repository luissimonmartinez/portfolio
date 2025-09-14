import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  experiences = [
    {
      rol: 'Senior Developer',
      ubication: 'Remoto',
      init: 'Nov. 2022',
      final: 'Actualidad',
      type: 'tiempo completo',
      company: 'NTT DATA PERÚ S.A.C',
      description: `En NTT DATA estoy consolidando experiencia en desarrollo web con frameworks, librerías modernas y arquitecturas basadas en microfronts, además de proyectos móviles con tecnologías híbridas.
       Participo en la implementación de pruebas unitarias, bajo la metodología Scrum. También utilizo soluciones de análisis de calidad de código y gestiono versiones mediante plataformas distribuidas,
       integrando prácticas de CI/CD para optimizar los procesos de entrega.`,
      projects: 'Iberdrola - España, AFP Habitat - Chile, Banco Santander - Perú'
    },
    {
      rol: 'Frontend Developer',
      ubication: 'Remoto',
      init: 'Abr. 2022',
      final: 'Oct. 2022',
      type: 'tiempo completo',
      company: 'SOLERA SYSTEMS S.A.C',
      description: `Desarrollo Frontend con Angular (v16 y v17), Angular Material y Bootstrap Grid. Implementación de pruebas unitarias con Jasmine y Karma. Metodología Scrum (Jira).
       Análisis de código con SonarLint y SonarQube. Control de versiones con Git y Azure Repos. Participando activamente en presentaciones a cliente.`,
      projects: 'Komatsu-Mitsui Maquinarias Perú (KMMP)'
    },
    {
      rol: 'Mobile Developer',
      ubication: 'Remoto',
      init: 'Dic. 2021',
      final: 'Feb. 2022',
      type: 'tiempo completo',
      company: 'RUMILAB S.A.C',
      description: `Desarrollo de un MVP para el sector bancario, orientado a transferencias de dinero y pago de cuotas de préstamos a entidades financieras.
       Implementado con Angular y TypeScript para la web, Ionic y Android para entornos móviles, y Bootstrap para la interfaz de usuario, garantizando una solución ágil
       y adaptable a las necesidades del cliente.`,
      projects: 'App Ahora+'
    },
    {
      rol: 'Frontend Developer',
      ubication: 'Remoto',
      init: 'Set. 2020',
      final: 'Oct. 2021',
      type: 'tiempo completo',
      company: 'LWP S.A.C',
      description: `Participación en el proyecto de un mini ERP, desarrollando interfaces y módulos con Angular, Angular Material y Bootstrap 4; además de soporte, mantenimiento y
      actualización de un ERP hecho con AngularJS y Bootstrap 3. La labor incluyó la optimización de procesos de facturación y la adaptación de funcionalidades a requerimientos del cliente.`,
      projects: 'Simba ERP, Donca Mini ERP'
    },
    {
      rol: 'PHP Developer',
      ubication: 'Remoto',
      init: 'Ene. 2020',
      final: 'Ago. 2020',
      type: 'tiempo completo',
      company: 'PORTAL WEB TM',
      description: `Desarrollo de aplicaciones web utilizando PHP nativo con Bootstrap y Ajax, además de implementación de interfaces modernas con Angular y Angular Material.
      Administración de bases de datos en MySQL y despliegue de proyectos mediante CPanel.`,
      projects: 'Mesa de Partes Virtual, Pagina Web Municipalidad Castillo Grande'
    }
  ]
}
