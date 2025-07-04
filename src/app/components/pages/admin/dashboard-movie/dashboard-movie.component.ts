import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MediaService } from '../../../../services/media.service';

@Component({
  selector: 'app-dashboard-movie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-movie.component.html',
})
export class DashboardMovieComponent implements OnInit {
  movies: any[] = [];
  editingMovie: any = null;
  isModalOpen = false;

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

loadMovies() {
  this.mediaService.getMovies().subscribe({
    next: (data) => {
      console.log('[DashboardMovieComponent] films reçus :', data);
      this.movies = data;
    },
    error: (err) => {
      console.error('[DashboardMovieComponent] erreur chargement films :', err);
    }
  });
}

  openMovieModal(movie: any = null) {
    if (movie) {
      this.editingMovie = {
        ...movie,
        type: 'movie',
        genreString: movie.genre?.join(', ') || '',
        actorsString: movie.actors?.join(', ') || '',
      };
    } else {
      this.editingMovie = {
        title: '',
        type: 'movie',
        genreString: '',
        actorsString: '',
        duration: null,
        releaseDate: null,
        posterUrl: '',
      };
    }
    this.isModalOpen = true;
  }

  saveMovie() {
    const { genreString, actorsString, ...rest } = this.editingMovie;

    const dto = {
      ...rest,
      genre: genreString?.split(',').map((g: string) => g.trim()) || [],
      actors: actorsString?.split(',').map((g: string) => g.trim()) || [],
      duration: Number(this.editingMovie.duration),
      type: 'movie',
    };

    const request$ = this.editingMovie.id
      ? this.mediaService.updateMovie(this.editingMovie.id, dto)
      : this.mediaService.createMovie(dto);

    request$.subscribe(() => {
      this.loadMovies();
      this.isModalOpen = false;
    });
  }

  deleteMovie(id: string) {
    if (confirm('Supprimer ce film ?')) {
      this.mediaService.deleteMovie(id).subscribe(() => this.loadMovies());
    }
  }
}
