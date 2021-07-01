import { Component, OnInit } from '@angular/core';
import { ngbCarouselTransitionOut } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cartaz-angular';
  cartaz = { 
    nomeProduto : 'Azeite português carm 500 ml',
    novoValor : '93,90',
    ultimoValor : '105,90',
    dataPromocao : '21/06/2021'
  }
  public gerar() {
    console.log("Teste geração: " + this.cartaz.nomeProduto)
  }
  teste = "Vamos ver ai";
  

  }
