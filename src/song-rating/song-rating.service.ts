import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { SongRating } from '../models/interfaces/rating.interface';
import { VRating } from '../models/validation/rating.validation';

@Injectable()
export class SongRatingService {

    constructor(
        @InjectModel('SongRating') private ratingModel: Model<SongRating>
    ) { }

    async getRatingBySongId(songId: number) {
        return await this.ratingModel.findOne({ songId });
    }

    async updateRating(data: VRating) {
        const rating = (await this.ratingModel.findOne({ songId: data.songId })) || new this.ratingModel({ songId: data.songId, likes: 0, dislikes: 0 });
        switch (data.action) {
            case "LIKE": rating.likes += 1; break;
            case "DISLIKE": rating.dislikes += 1; break;
            case "REMOVE_LIKE": rating.likes -= 1; break;
            case "REMOVE_DISLIKE": rating.dislikes -= 1;
        }

        return await rating.save();
    }

}
