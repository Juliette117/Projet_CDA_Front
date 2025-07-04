import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../../../services/media.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard-game',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-videogame.component.html'
})
export class DashboardVideoGameComponent implements OnInit {
  videogames: any[] = [];
  allTeams: any[] = [];

  type = 'videogame';

  editingGame: any = null;
  isModalOpen = false;

  constructor(
    private mediaService: MediaService,

  ) {}

  ngOnInit(): void {
    // this.loadMovies();

  }

  // loadMovies() {
  //   this.mediaService.getAll().subscribe((data) => {
  //     this.movies = data;
  //   });
  //   //  this.mediaService.getMovies().subscribe((data) => {
  //   //   this.movies = data;
  //   // });
  // }

  // openMovieModal(movie: any = null) {
  //   if (movie) {
  //     this.editingMovie = {
  //       ...movie,
  //       genreString: movie.genre?.join(', ') || '',
  //       tagString: movie.tags?.join(', ') || '',
  //     };
  //   } else {
  //     this.editingMovie = {
  //       title: '',
  //       type: 'movie',
  //       genreString: '',
  //       tagString: '',
  //       language: '',
  //       duration: null,
  //       releaseDate: null,
  //       teamIds: []
  //     };
  //   }
  //   this.isModalOpen = true;
  // }

  // saveMovie() {
  //   const dto = {
  //     ...this.editingMovie,
  //     genre: this.editingMovie.genreString.split(',').map((g: string) => g.trim()),
  //     tags: this.editingMovie.tagString.split(',').map((t: string) => t.trim())
  //   };

  //   if (this.editingMovie.id) {
  //     this.mediaService.updateMovie(this.editingMovie.id, dto).subscribe(() => {
  //       this.loadMovies();
  //       this.isModalOpen = false;
  //     });
  //   } else {
  //     this.mediaService.createMovie(dto).subscribe(() => {
  //       this.loadMovies();
  //       this.isModalOpen = false;
  //     });
  //   }
  // }

  // deleteMovie(id: number) {
  //   if (confirm('Supprimer ce film ?')) {
  //     this.mediaService.deleteMovie(id).subscribe(() => this.loadMovies());
  //   }
  // }
}