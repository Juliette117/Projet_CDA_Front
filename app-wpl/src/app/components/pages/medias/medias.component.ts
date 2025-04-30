import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../../services/media.service';


@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html'
})
export class MediasComponent implements OnInit {
  movies: any[] = [];
  series: any[] = [];
  videoGames: any[] = [];

  constructor(private mediaService: MediaService) {}

  ngOnInit() {
    this.mediaService.getMovies().subscribe((data) => this.movies = data);
    this.mediaService.getSeries().subscribe((data) => this.series = data);
    this.mediaService.getVideoGames().subscribe((data) => this.videoGames = data);
  }
}