import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaService } from '../../../../services/media.service';
import { NavbarComponent } from '../../layout/navbar.component';


@Component({
  selector: 'app-movies-list',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: '././movies-list.component.scss'
})
export class MoviesListComponent implements OnInit {
  medias: any[] = [];
  movies: any[] = [];


  constructor(private readonly mediaService: MediaService) {}

  ngOnInit() {
     this.mediaService.getMovies().subscribe((data) => this.medias = data);
    
  }
}