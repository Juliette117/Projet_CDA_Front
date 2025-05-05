import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardMovieComponent } from './dashboard-movie.component';


describe('DashboardMovieComponent', () => {
  let component: DashboardMovieComponent;
  let fixture: ComponentFixture<DashboardMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
