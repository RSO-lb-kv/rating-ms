import { Document } from 'mongoose';

export interface SongRating extends Document {
    songId: number;
    likes: number;
    dislikes: number
}
