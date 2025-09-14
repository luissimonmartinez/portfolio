import { Component } from '@angular/core';
import { FileUtil } from 'src/app/utils/file.util';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  certifications = [
    {
      title: 'Arquitectura de Software', date: 'Feb. 2025',
      description: 'Bootcamp de Arquitectura de Software cursada en la Plataforma Código Facilito',
      pahtFile: 'assets/files/certifications/arquitectura _de_software.pdf',
      nameFile: 'arquitectura _de_software.pdf'
    },
    {
      title: 'Gestión de Proyectos', date: 'Nov. 2024',
      description: 'Especialización en Gestión de Proyectos por la Universidad Tecnológica Nacional del Perú',
      pahtFile: 'assets/files/certificationes/gestion_proyectos_1.pdf',
      nameFile: 'gestion_proyectos_1.pdf'
    },
    {
      title: 'Certificación Scrum Master', date: 'May. 2024',
      description: 'Certificación Scrum Master por la institución certificadora SCRUMstudy',
      pahtFile: 'assets/files/certificationes/scrum_master_scrum_study.pdf',
      nameFile: 'scrum_master_scrum_study.pdf'
    },
    {
      title: 'Capacitación Scrum Master', date: 'May. 2024',
      description: 'Capacitación en Scrum Master cursado en la Pontifice Universidad Católica del Perú',
      pahtFile: 'assets/files/certificationes/cap_scrum_master.pdf',
      nameFile: 'cap_scrum_master.pdf'
    },
    {
      title: 'Inglés Americano Intermedio', date: 'Nov. 2021',
      description: 'Inglés americano intermedio cursado en la Universidad Nacional Agraria de la Selva',
      pahtFile: 'assets/files/certificationes/ingles_intermedio_unas.pdf',
      nameFile: 'ingles_intermedio_unas.pdf'
    },
  ]

  study = {
    description: 'Bachiller en Informática y Sistemas, en proceso de titulación como ingeniero.',
    pathFile: 'assets/files/BACHILLER.pdf',
    nameFile: 'bachiller_luis_simon_martinez.pdf'
  }

  downloadCV(name: string, path: string) {
    FileUtil.download(name, path);
  }

}
