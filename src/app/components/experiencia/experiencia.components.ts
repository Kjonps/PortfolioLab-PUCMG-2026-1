import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

export interface Experiencia {
  titleKey: string;
  year: string;
  descriptionKey: string;
  detailKey: string;
  image: string;
}

@Component({
  selector: 'app-experiencia',
  styleUrl: './experiencia.scss',
  templateUrl: './experiencia.html',
})
export class ExperienciaComponent {
  tSer = inject(TranslationService);
  selectedExp: Experiencia | null = null;

  experiencias: Experiencia[] = [
  { 
    titleKey: 'Técnico em Informática', 
    year: '2021-2023', 
    descriptionKey: 'COTEMIG', 
    detailKey: 'Formação técnica focada em desenvolvimento de sistemas e infraestrutura de TI.', 
    image: 'https://www.cotemig.com.br/arquivos/logos/logo-cotemig-vertical.png' 
  },
  { 
    titleKey: 'Manutenção de Hardware', 
    year: '2023', 
    descriptionKey: 'InfoBrasil', 
    detailKey: 'Diagnóstico e reparo de componentes, montagem de máquinas e suporte técnico especializado.', 
    image: 'https://www.google.com/imgres?q=inforbrasil%20inform%C3%A1tica&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100064330833023&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FInforbrasil%2F&docid=1NK9voGMMoHbYM&tbnid=lhCrjXyvSkMKcM&vet=12ahUKEwi24anQ8piTAxWiH7kGHcTBN10QnPAOegQIGBAB..i&w=198&h=198&hcb=2&itg=1&ved=2ahUKEwi24anQ8piTAxWiH7kGHcTBN10QnPAOegQIGBAB' 
  },
  { 
    titleKey: 'Certificação RedHat', 
    year: '2025', 
    descriptionKey: 'Linux Administration', 
    detailKey: 'Curso focado em administração de sistemas Linux e soluções open source empresariais.', 
    image: 'https://www.google.com/imgres?q=redhat&imgurl=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2F4a3344_7bbc469f9f3841858f8ec66e85edf106~mv2.jpg%2Fv1%2Ffill%2Fw_623%2Ch_400%2Cal_c%2Cq_80%2FLogo%2520Redhat.jpg&imgrefurl=https%3A%2F%2Fwww.trinotecnologia.com.br%2Flicencasredhat%2Flicen%25C3%25A7a-red-hat-enterprise-linux-server%2C-subscription-1-year-standard-(physical-or-virtual-nodes)-(2-sockets)---rh00004&docid=VvwIxsf1AfSZOM&tbnid=kS4F89W-vx__fM&vet=12ahUKEwiMwNnF9ZiTAxVQqZUCHQjdA_0QnPAOegQIIBAB..i&w=623&h=400&hcb=2&ved=2ahUKEwiMwNnF9ZiTAxVQqZUCHQjdA_0QnPAOegQIIBAB' 
  },
  { 
    titleKey: 'Consultoria de Vendas', 
    year: '2025-Atual', 
    descriptionKey: 'Amiltech', 
    detailKey: 'Especialista em vendas e consultoria de soluções para automação comercial e tecnológica.', 
    image: 'https://amiltech.com.br/wp-content/uploads/2021/05/logo-amiltech.png' 
  },
  // --- PROTÓTIPOS PARA VOCÊ COMPLETAR ---
  { 
    titleKey: 'Título da Nova Experiência', 
    year: '2026', 
    descriptionKey: 'Nome da Empresa ou Instituição', 
    detailKey: 'Descreva aqui brevemente as responsabilidades ou aprendizados adquiridos.', 
    image: 'https://via.placeholder.com/150' 
  },
  { 
    titleKey: 'Novo Curso ou Projeto', 
    year: '2027', 
    descriptionKey: 'Plataforma ou Cliente', 
    detailKey: 'Descreva o impacto dessa conquista na sua carreira.', 
    image: 'https://via.placeholder.com/150' 
  }
];

  openModal(exp: Experiencia) {
    this.selectedExp = exp;
  }

  closeModal() {
    this.selectedExp = null;
  }

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }
}
