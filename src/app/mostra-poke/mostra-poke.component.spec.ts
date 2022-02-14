import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraPokeComponent } from './mostra-poke.component';

describe('MostraPokeComponent', () => {
  let component: MostraPokeComponent;
  let fixture: ComponentFixture<MostraPokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostraPokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
