import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../../../services/media.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardMovieComponent } from '../dashboard-movie/dashboard-movie.component';
import { DashboardSerieComponent } from '../dashboard-serie/dashboard-serie.component';
import { DashboardVideoGameComponent } from '../dashboard-videogame/dashboard-videogame.component';
import { NavbarComponent } from '../../layout/navbar.component';

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    DashboardMovieComponent,
    DashboardSerieComponent,
    DashboardVideoGameComponent,
  ],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.scss',
})
export class DashboardAdminComponent implements OnInit {
  activeTab: string = 'movie';
  movies: any[] = [];
  series: any[] = [];
  videogames: any[] = [];



  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.mediaService.getMovies().subscribe((data) => (this.movies = data));
    this.mediaService.getSeries().subscribe((data) => (this.series = data));
    this.mediaService.getVideoGames().subscribe((data) => (this.videogames = data));
  }
}

