import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateAutosPage } from './update-autos.page';

describe('UpdateAutosPage', () => {
  let component: UpdateAutosPage;
  let fixture: ComponentFixture<UpdateAutosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateAutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
