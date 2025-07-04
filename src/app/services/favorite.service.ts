import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favoriteMedias: any[] = [];
  private favoritePlaylists: any[] = [];

  constructor() {}

  addMediaToFavorites(media: any) {
    this.favoriteMedias.push(media);
  }

  getFavoriteMedias() {
    return this.favoriteMedias;
  }

  addPlaylistToFavorites(playlist: any) {
    this.favoritePlaylists.push(playlist);
  }

  getFavoritePlaylists() {
    return this.favoritePlaylists;
  }
}