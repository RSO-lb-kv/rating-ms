import { Schema } from 'mongoose';

export const SongRating = new Schema(
    {
        songId: {
            type: Number,
            unique: true
        },
        likes: {
            type: Number,
            default: 0
        },
        dislikes: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true },
);
