import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuCatalogoComponent } from './meu-catalogo.component';

describe('MeuCatalogoComponent', () => {
  let component: MeuCatalogoComponent;
  let fixture: ComponentFixture<MeuCatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuCatalogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
