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

  editingserie: any = null;
  isModalOpen = false;

  constructor(
    private mediaService: MediaService,

  ) {}

  ngOnInit(): void {
    this.loadSeries();

  }

  loadSeries() {
    this.mediaService.getAll().subscribe((data) => {
      this.series = data;
    });
  }

  openserieModal(serie: any = null) {
    if (serie) {
      this.editingserie = {
        ...serie,
        genresString: serie.genres?.join(', ') || '',
        tagsString: serie.tags?.join(', ') || '',
      };
    } else {
      this.editingserie = {
        title: '',
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

  saveserie() {
    const dto = {
      ...this.editingserie,
      genres: this.editingserie.genresString.split(',').map((g: string) => g.trim()),
      tags: this.editingserie.tagsString.split(',').map((t: string) => t.trim())
    };

    if (this.editingserie.id) {
      this.mediaService.updateSerie(this.editingserie.id, dto).subscribe(() => {
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

  deleteserie(id: number) {
    if (confirm('Supprimer ce film ?')) {
      this.mediaService.deleteSerie(id).subscribe(() => this.loadSeries());
    }
  }
}