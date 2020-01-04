import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SongRating } from '../models/schemas/rating.schema';
import { SongRatingController } from './song-rating.controller';
import { SongRatingService } from './song-rating.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'SongRating', schema: SongRating },
    ]),
  ],
  controllers: [SongRatingController],
  providers: [SongRatingService]
})
export class SongRatingModule { }
