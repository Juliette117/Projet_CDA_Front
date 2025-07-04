import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../../../services/media.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard-serie',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-serie.component.html'
})
export class DashboardSerieComponent implements OnInit {
  series: any[] = [];
  allTeams: any[] = [];

  type = 'serie';

  editingSerie: any = null;
  isModalOpen = false;

  constructor(
    private mediaService: MediaService,

  ) {}

  ngOnInit(): void {
    this.loadSeries();

  }

  loadSeries() {
    this.mediaService.getSeries().subscribe((data) => {
      this.series = data;
    });
  }

  openSerieModal(serie: any = null) {
    if (serie) {
      this.editingSerie = {
        ...serie,
        genreString: serie.genre?.join(', ') || '',
      };
    } else {
      this.editingSerie = {
        title: '',
        type: 'serie',
        genreString: '',
        duration: null,
        releaseDate: null,
        teamIds: []
      };
    }
    this.isModalOpen = true;
  }

  saveSerie() {
    const dto = {
      ...this.editingSerie,
      genre: this.editingSerie.genreString.split(',').map((g: string) => g.trim()),
    };

    if (this.editingSerie.id) {
      this.mediaService.updateSerie(this.editingSerie.id, dto).subscribe(() => {
        this.loadSeries();
        this.isModalOpen = false;
      });
    } else {
      this.mediaService.createSerie(dto).subscribe(() => {
        this.loadSeries();
        this.isModalOpen = false;
      });
    }
  }

  deleteSerie(id: number) {
    if (confirm('Supprimer cette série ?')) {
      this.mediaService.deleteSerie(id).subscribe(() => this.loadSeries());
    }
  }
}