import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  word= '</>'
  experiences = [
    {
      rol: 'Senior Developer',
      ubication: 'Remoto',
      init: 'Nov. 2022',
      final: 'Actualidad',
      type: 'tiempo completo',
      company: 'NTT DATA PERÚ S.A.C',
      description: ''
    },
    {
      rol: 'Frontend Developer',
      ubication: 'Remoto',
      init: 'Abr. 2022',
      final: 'Oct. 2022',
      type: 'tiempo completo',
      company: 'SOLERA SYSTEMS S.A.C',
      description: ''
    },
    {
      rol: 'Mobile Developer',
      ubication: 'Remoto',
      init: 'Dic. 2021',
      final: 'Feb. 2022',
      type: 'tiempo completo',
      company: 'RUMILAB S.A.C',
      description: ''
    },
    {
      rol: 'Frontend Developer',
      ubication: 'Remoto',
      init: 'Set. 2020',
      final: 'Oct. 2021',
      type: 'tiempo completo',
      company: 'LEAD WORKING PARTNER S.A.C',
      description: ''
    },
    {
      rol: 'PHP Developer',
      ubication: 'Remoto',
      init: 'Ene. 2020',
      final: 'Ago. 2020',
      type: 'tiempo completo',
      company: 'PORTAL WEB TINGO MARIA',
      description: ''
    }
  ]
}
