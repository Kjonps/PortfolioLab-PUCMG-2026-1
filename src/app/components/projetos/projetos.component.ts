import { Component, inject } from '@angular/core';
import { ProjetoCardComponent } from '../projeto-card/projeto-card.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-projetos',
  styleUrl: './projetos.scss',
  templateUrl: './projetos.html',
  imports: [ProjetoCardComponent],
})
export class ProjetosComponent {
  tSer = inject(TranslationService);
}
