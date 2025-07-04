import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaService } from '../../../../services/media.service';
import { NavbarComponent } from '../../layout/navbar.component';


@Component({
  selector: 'app-series-list',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './series-list.component.html'
})
export class SeriesListComponent implements OnInit {
  medias: any[] = [];
  movies: any[] = [];
  series: any[] = [];
  videoGames: any[] = [];

  constructor(private readonly mediaService: MediaService) {}

  ngOnInit() {
    this.mediaService.getMovies().subscribe((data) => this.movies = data);
    this.mediaService.getSeries().subscribe((data) => this.series = data);
    this.mediaService.getVideoGames().subscribe((data) => this.videoGames = data);
  }
}