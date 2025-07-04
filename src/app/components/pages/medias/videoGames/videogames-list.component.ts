import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../../../services/media.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../layout/navbar.component';


@Component({
  selector: 'app-videogame-list',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './videogames-list.component.html'
})
export class VideoGamesListComponent implements OnInit {
  medias: any[] = [];
  // movies: any[] = [];
  // series: any[] = [];
  videoGames: any[] = [];

  constructor(private readonly mediaService: MediaService) {}

  ngOnInit() {
    // this.mediaService.getMovies().subscribe((data) => this.movies = data);
    // this.mediaService.getSeries().subscribe((data) => this.series = data);
    this.mediaService.getVideoGames().subscribe((data) => this.videoGames = data);
  }
}