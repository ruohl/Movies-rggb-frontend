import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MovieInterface } from '../../interfaces/movie/movie.interface';
import { GenreInterface } from '../../interfaces/genre/genre.interface';
import { MovieService } from '../../services/movie/movie.service.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  movies: MovieInterface[] = [];
  genres: GenreInterface[] = [];
  constructor(private movieService: MovieService) {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

  getPosters(title: string){
    return `../../assets/resources/posters/${title}.png`;
  }

  getYear(releasedDate: Date): string {
    const date = new Date(releasedDate);
    return date.getFullYear().toString();
  }

  getStarRating(rating: number): string[] {
    const starCount = 5;
    const RatingtoStars = rating / 2;
    const stars: string[] = [];

    for (let i = 0; i < starCount; i++) {
      if (i + 1 <= RatingtoStars) {
        stars.push('star');
      } else if (i + 0.5 <= RatingtoStars) {
        stars.push('star_half');
      } else {
        stars.push('star_border');
      }
    }
    return stars;
  }
  
}
