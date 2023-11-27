import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailAutosPage } from './detail-autos.page';

describe('DetailAutosPage', () => {
  let component: DetailAutosPage;
  let fixture: ComponentFixture<DetailAutosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailAutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
