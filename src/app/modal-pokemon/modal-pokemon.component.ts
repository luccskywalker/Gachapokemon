import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-pokemon',
  templateUrl: './modal-pokemon.component.html',
  styleUrls: ['./modal-pokemon.component.css'],
})
export class ModalPokemonComponent implements OnInit {
  @Input()
  public pokemon: any;

  @Output()
  curte2: EventEmitter<boolean> = new EventEmitter();

  isVisible = false;
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

  likeModal() {
    this.curte2.emit(true);
  }
}
