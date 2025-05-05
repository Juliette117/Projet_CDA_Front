import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVideogameComponent } from './Dashboard-videogame.component';

describe('DashboardVideogameComponent', () => {
  let component: DashboardVideogameComponent;
  let fixture: ComponentFixture<DashboardVideogameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardVideogameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardVideogameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
