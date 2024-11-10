import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  public livros: Livro[] = [
    { 
        codigo: 1, 
        codEditora: 1, 
        titulo: "Jornada das Estrelas", 
        resumo: "Uma épica aventura intergaláctica onde dois exploradores enfrentam desafios e descobrem segredos que podem mudar o destino da humanidade.", 
        autores: ["Carlos Silva", "Ana Pereira"]
    },
    { 
        codigo: 2, 
        codEditora: 2, 
        titulo: "O Mistério do Vale", 
        resumo: "Em um pequeno vilarejo cercado por montanhas, um grupo de amigos investiga uma série de eventos estranhos, revelando um mistério que remonta a gerações.", 
        autores: ["Mariana Santos", "João Souza"]
    },
    { 
        codigo: 3, 
        codEditora: 3, 
        titulo: "Segredos do Oceano", 
        resumo: "Uma jovem oceanógrafa embarca em uma expedição para desvelar os segredos do fundo do mar, encontrando criaturas místicas e tesouros perdidos.", 
        autores: ["Felipe Martins", "Larissa Rocha"]
    },
    { 
        codigo: 4, 
        codEditora: 4, 
        titulo: "A Magia do Tempo", 
        resumo: "Em um mundo onde o tempo é uma mercadoria, um jovem se vê envolvido em uma trama perigosa que pode alterar o curso da história.", 
        autores: ["Roberto Costa", "Fernanda Lima"]
    }
  ];

  constructor() { }

  obterLivros = (): Livro[] => this.livros;

  incluir = (novoLivro: Livro): void => {
    console.log("Novo livro adicionado!");

    let maiorCodigo = 0;
    for (let livro of this.obterLivros()) {
        maiorCodigo = Math.max(maiorCodigo, livro.codigo);
    }

    novoLivro.codigo = maiorCodigo + 1;
    this.livros.push(novoLivro);  
  }

  excluir(codigo: number): void {
    const indexLivro = this.livros.findIndex((x) => x.codigo === codigo);
    this.livros.splice(indexLivro, 1);
    console.log(this.livros);
  }
}
