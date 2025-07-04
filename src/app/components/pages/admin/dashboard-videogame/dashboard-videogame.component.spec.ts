import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardVideoGameComponent } from './dashboard-videogame.component';

describe('DashboardVideoGameComponent', () => {
  let component: DashboardVideoGameComponent;
  let fixture: ComponentFixture<DashboardVideoGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardVideoGameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardVideoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
