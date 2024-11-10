import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [NgFor, FormsModule],
  providers: [],
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css'
})
export class LivroDadosComponent {
  public autoresForm: string = "";
  public editoras: Editora[] = [];
  public livro: Livro = new Livro;

  constructor(
    private servEditora: ControleEditoraService, 
    private servLivros: ControleLivrosService,
    private router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    // console.log("(de livro-dados) Estes são os livros:");
    // console.log(this.servLivros.obterLivros());
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split(" ");
    
    this.servLivros.incluir(this.livro);

    this.router.navigateByUrl("/lista");
  }
}
