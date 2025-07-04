import { Component } from '@angular/core';
import { RecommendationService } from '../services/recommandation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommandation',
  imports: [CommonModule],
  templateUrl: './recommandation.component.html',
  styleUrl: './recommandation.component.scss',
})
export class RecommendationComponent {
  recommendedMedia: any[] = [];

  constructor(private recommendationService: RecommendationService) {}

  ngOnInit(): void {
    this.recommendationService.getMediaRecommendations().subscribe((data) => {
      this.recommendedMedia = data;
    });
  }
}
