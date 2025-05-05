import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../../../services/media.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardMovieComponent } from '../dashboard-movie/dashboard-movie.component';
import { DashboardSerieComponent } from '../dashboard-serie/dashboard-serie.component';

@Component({
  selector: 'app-dashboard-admin',
  imports: [CommonModule, FormsModule, DashboardMovieComponent, DashboardSerieComponent],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.scss',
})
export class DashboardAdminComponent implements OnInit {

  activeTab: string = "movie";

  movies: any[] = [];
  series: any[] = [];
  videoGames: any[] = [];

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.mediaService.getMovies().subscribe((data) => (this.movies = data));
    this.mediaService.getSeries().subscribe((data) => (this.series = data));
    this.mediaService
      .getVideoGames()
      .subscribe((data) => (this.videoGames = data));
  }
}

// import { Component, OnInit } from '@angular/core';
// import { MediaService } from '../../../services/media.service';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-dashboard-admin',
//   imports: [CommonModule, FormsModule],
//   templateUrl: './dashboard-admin.component.html',
//   styleUrl: './dashboard-admin.component.scss'
// })
// export class DashboardAdminComponent implements OnInit {
//   movies: any[] = [];
//   series: any[] = [];
//   videoGames: any[] = [];

//   // MOVIE
// isMovieModalOpen = false;
// editingMovie: any = null;

// // SERIE
// isSerieModalOpen = false;
// editingSerie: any = null;

// // GAME
// isGameModalOpen = false;
// editingGame: any = null;

//   constructor(private mediaService: MediaService) {}

//   ngOnInit(): void {
//     this.loadAll();
//   }

//   loadAll() {
//     this.mediaService.getMovies().subscribe(data => this.movies = data);
//     this.mediaService.getSeries().subscribe(data => this.series = data);
//     this.mediaService.getVideoGames().subscribe(data => this.videoGames = data);

//   }

//   // -------- MOVIE --------
// openCreateMovieModal() {
//   this.editingMovie = { title: '', synopsis: '', duration: 90, releaseDate: '', imageUrl: '' };
//   this.isMovieModalOpen = true;
// }

// openEditMovieModal(movie: any = null) {
//   this.editingMovie = movie
//     ? { ...movie }
//     : { title: '', genres: [], tags: [], duration: 0, releaseYear: null, };
//   this.isMovieModalOpen = true;
// }

// saveMovie() {
//   if (this.editingMovie.id) {
//     this.mediaService.updateMovie(this.editingMovie.id, this.editingMovie).subscribe(() => {
//       this.loadAll(); // reload
//       this.isMovieModalOpen = false;
//     });
//   } else {
//     this.mediaService.createMovie(this.editingMovie).subscribe(() => {
//       this.loadAll();
//       this.isMovieModalOpen = false;
//     });
//   }
// }

// deleteMovie(id: number) {
//   if (confirm('Supprimer ce film ?')) {
//     this.mediaService.deleteMovie(id).subscribe(() => this.loadAll());
//   }
// }

// // -------- SERIE --------
// openCreateSerieModal() {
//   this.editingSerie = { title: '', synopsis: '', seasons: 1, imageUrl: '' };
//   this.isSerieModalOpen = true;
// }

// openEditSerieModal(serie: any) {
//   this.editingSerie = { ...serie };
//   this.isSerieModalOpen = true;
// }

// saveSerie() {
//   if (this.editingSerie.id) {
//     this.mediaService.updateSerie(this.editingSerie.id, this.editingSerie).subscribe(() => this.loadAll());
//   } else {
//     this.mediaService.createSerie(this.editingSerie).subscribe(() => this.loadAll());
//   }
//   this.isSerieModalOpen = false;
// }

// deleteSerie(id: number) {
//   if (confirm('Supprimer cette série ?')) {
//     this.mediaService.deleteSerie(id).subscribe(() => this.loadAll());
//   }
// }

// // -------- GAME --------
// openCreateGameModal() {
//   this.editingGame = { title: '', synospis: '', platform: '', imageUrl: '' };
//   this.isGameModalOpen = true;
// }

// openEditGameModal(game: any) {
//   this.editingGame = { ...game };
//   this.isGameModalOpen = true;
// }

// saveGame() {
//   if (this.editingGame.id) {
//     this.mediaService.updateVideoGame(this.editingGame.id, this.editingGame).subscribe(() => this.loadAll());
//   } else {
//     this.mediaService.createVideoGame(this.editingGame).subscribe(() => this.loadAll());
//   }
//   this.isGameModalOpen = false;
// }

// deleteGame(id: number) {
//   if (confirm('Supprimer ce jeu ?')) {
//     this.mediaService.deleteVideoGame(id).subscribe(() => this.loadAll());
//   }
// }

// }
