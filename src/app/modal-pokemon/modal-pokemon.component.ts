import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-pokemon',
  templateUrl: './modal-pokemon.component.html',
  styleUrls: ['./modal-pokemon.component.css'],
})
export class ModalPokemonComponent implements OnInit {
  isVisible = false;
  // public tags: any = [
  //   {
  //     id: 4,
  //     name: 'Atendimento com valor',
  //     stamp: true,
  //     color: '#66cdaa',
  //     internal: false,
  //   },
  //   {
  //     id: 144,
  //     name: 'Alteração de endereço',
  //     stamp: true,
  //     color: '#DDDDDD',
  //     internal: false,
  //   },
  // ];

  constructor() {}

  ngOnInit(): void {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
