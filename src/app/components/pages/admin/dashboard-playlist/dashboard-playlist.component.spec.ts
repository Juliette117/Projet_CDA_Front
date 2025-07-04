import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPlaylistComponent } from './Dashboard-playlist.component';

describe('DashboardPlaylistComponent', () => {
  let component: DashboardPlaylistComponent;
  let fixture: ComponentFixture<DashboardPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPlaylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
