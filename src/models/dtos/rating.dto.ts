import { SongRating } from '../interfaces/rating.interface';


export class DSongRating {
    likes: number;
    dislikes: number;

    constructor(rating: SongRating) {
        this.likes = rating ? rating.likes : 0;
        this.dislikes = rating ? rating.dislikes : 0;
    }
}
