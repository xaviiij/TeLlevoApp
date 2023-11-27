import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteAutosPage } from './delete-autos.page';

describe('DeleteAutosPage', () => {
  let component: DeleteAutosPage;
  let fixture: ComponentFixture<DeleteAutosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteAutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
