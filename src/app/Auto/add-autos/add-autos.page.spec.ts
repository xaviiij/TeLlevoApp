import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAutosPage } from './add-autos.page';

describe('AddAutosPage', () => {
  let component: AddAutosPage;
  let fixture: ComponentFixture<AddAutosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddAutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
