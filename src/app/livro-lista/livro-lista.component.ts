import { Component } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [NgFor],
  providers: [],
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
})
export class LivroListaComponent {
  editoras: Editora[] = [];
  livros: Livro[] = [];

  constructor(private servEditora: ControleEditoraService, 
    private servLivros: ControleLivrosService) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
    // console.log("(de livro-lista) Estes são os livros:");
    // console.log(this.servLivros.obterLivros());
  }

  excluir = (codLivro: number): void => {
    this.servLivros.excluir(codLivro);
  }

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  }
}