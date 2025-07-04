import { Component } from '@angular/core';
import { MediaService } from '../../../services/media.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-media',
  imports: [],
  templateUrl: './media-detail.component.html',
  styleUrl: './media-detail.component.scss',
})
export class MediaDetailComponent {
  movie: '' | undefined;
  serie: '' | undefined;
  videoGame: '' | undefined;

  constructor(
    private readonly mediaService: MediaService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.mediaService.getMovie(id!, {}).subscribe((data) => (this.movie = data));
    this.mediaService.getSerie(id!, {}).subscribe((data) => (this.serie = data));
    this.mediaService
      .getVideoGame()
      .subscribe((data) => (this.videoGame = data));
  }

  // addToFavorites(media: any) {
  //   this.favoriteService.addMediaToFavorites(media);

  // }
}
