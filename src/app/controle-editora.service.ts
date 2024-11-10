import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Editora[] = [
    { codEditora: 1, nome: "Editora Pioneira" },
    { codEditora: 2, nome: "Editora Horizonte" },
    { codEditora: 3, nome: "Marítima" },
    { codEditora: 4, nome: "Aurora CO" }
  ];

  constructor() { }

  getNomeEditora = (codEditora: number): string => {
    let editora = this.editoras.filter((x) => x.codEditora = codEditora)[0];

    return editora.nome;
  }

  getEditoras = (): Editora[] => this.editoras;
}