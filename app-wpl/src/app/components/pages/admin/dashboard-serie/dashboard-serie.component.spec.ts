import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardSerieComponent } from './dashboard-serie.component';


describe('DashboardSerieComponent', () => {
  let component: DashboardSerieComponent;
  let fixture: ComponentFixture<DashboardSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSerieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
