import { Body, Controller, Get, Param, ParseIntPipe, Put } from '@nestjs/common';

import { DSongRating } from '../models/dtos/rating.dto';
import { VRating } from '../models/validation/rating.validation';
import { SongRatingService } from './song-rating.service';

@Controller('song-rating')
export class SongRatingController {

    constructor(
        private ratingService: SongRatingService
    ) { }

    @Get(":songId")
    async getRatingBySongId(@Param("songId", new ParseIntPipe()) songId: number) {
        return new DSongRating(await this.ratingService.getRatingBySongId(songId));
    }

    @Put()
    async updateRating(@Body() data: VRating) {
        return new DSongRating(await this.ratingService.updateRating(data));
    }

}
