import { IsIn, IsNumber } from 'class-validator';

export class VRating {
    @IsNumber()
    songId: number;

    @IsIn(["LIKE", "DISLIKE", "REMOVE_LIKE", "REMOVE_DISLIKE"])
    action: "LIKE" | "DISLIKE" | "REMOVE_LIKE" | "REMOVE_DISLIKE";

}