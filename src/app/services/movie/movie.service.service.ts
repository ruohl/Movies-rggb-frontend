import { Injectable } from '@angular/core';
import { MovieInterface } from '../../interfaces/movie/movie.interface';
import { GenreInterface } from '../../interfaces/genre/genre.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  constructor(private http: HttpClient) { }

  private database = 'http://localhost:8080';
  getMovies(): Observable<MovieInterface[]> {
    return this.http.get<MovieInterface[]>(`${this.database}/movies`).pipe(
      catchError((error) => {
        console.error('Error:', error);
        return throwError(() => error);
      })
    );
  }

}
