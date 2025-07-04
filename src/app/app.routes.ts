import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { MoviesListComponent } from './components/pages/medias/movies/movies-list.component';
import { MediaDetailComponent } from './components/pages/medias/media-detail.component';
import { DashboardAdminComponent } from './components/pages/admin/dashboard-admin/dashboard-admin.component';
import { DashboardMovieComponent } from './components/pages/admin/dashboard-movie/dashboard-movie.component';
import { RecommendationComponent } from './recommandations/recommandation.component';
import { RoleGuard } from './guards/role.guard';
import { Error403Component } from './components/pages/errors/error403.component';
import { Error404Component } from './components/pages/errors/error404.component';
import { SeriesListComponent } from './components/pages/medias/series/series-list.component';
import { VideoGamesListComponent } from './components/pages/medias/videoGames/videogames-list.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'dashboard/admin',
    component: DashboardAdminComponent,
    canActivate: [AuthGuard, RoleGuard], data: { roles: ['admin'] },
  },
  { path: 'movies', component: MoviesListComponent},
  { path: 'series', component: SeriesListComponent},
  { path: 'videogames', component: VideoGamesListComponent},
  { path: 'media', component: MediaDetailComponent },
  { path: 'recommendations', component: RecommendationComponent },
  { path: '403', component: Error403Component},
  { path: '**', component: Error404Component},
  // { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
