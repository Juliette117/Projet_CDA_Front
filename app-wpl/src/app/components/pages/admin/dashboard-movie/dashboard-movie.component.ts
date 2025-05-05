import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../../../services/media.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard-movie',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-movie.component.html'
})
export class DashboardMovieComponent implements OnInit {
  movies: any[] = [];
  allTeams: any[] = [];

  type = 'movie';

  editingMovie: any = null;
  isModalOpen = false;

  constructor(
    private mediaService: MediaService,

  ) {}

  ngOnInit(): void {
    this.loadMovies();

  }

  loadMovies() {
    this.mediaService.getAll().subscribe((data) => {
      this.movies = data;
    });
  }

  openMovieModal(movie: any = null) {
    if (movie) {
      this.editingMovie = {
        ...movie,
        genresString: movie.genres?.join(', ') || '',
        tagsString: movie.tags?.join(', ') || '',
      };
    } else {
      this.editingMovie = {
        title: '',
        type: 'movie',
        genresString: '',
        tagsString: '',
        language: '',
        duration: null,
        releaseYear: null,
        teamIds: []
      };
    }
    this.isModalOpen = true;
  }

  saveMovie() {
    const dto = {
      ...this.editingMovie,
      genres: this.editingMovie.genresString.split(',').map((g: string) => g.trim()),
      tags: this.editingMovie.tagsString.split(',').map((t: string) => t.trim())
    };

    if (this.editingMovie.id) {
      this.mediaService.updateMovie(this.editingMovie.id, dto).subscribe(() => {
        this.loadMovies();
        this.isModalOpen = false;
      });
    } else {
      this.mediaService.createMovie(dto).subscribe(() => {
        this.loadMovies();
        this.isModalOpen = false;
      });
    }
  }

  deleteMovie(id: number) {
    if (confirm('Supprimer ce film ?')) {
      this.mediaService.deleteMovie(id).subscribe(() => this.loadMovies());
    }
  }
}