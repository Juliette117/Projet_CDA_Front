import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediasComponent } from './videogames-list.component';

describe('MediasComponent', () => {
  let component: MediasComponent;
  let fixture: ComponentFixture<MediasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
