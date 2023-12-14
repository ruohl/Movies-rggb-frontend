import { Time } from "@angular/common";
import { GenreInterface } from "../genre/genre.interface";

export interface MovieInterface {
    id: number;
    title: string;
    description: string;
    rating: number;
    duration: Time;
    genres: GenreInterface[];
    releasedDate: Date;
    trailerLink: string;
}
