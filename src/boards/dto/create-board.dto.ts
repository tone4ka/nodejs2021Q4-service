import BoardColumn from '../../columns/entities/column.entity';
import { IsString } from "class-validator";

export class CreateBoardDto {
    @IsString({message: 'could be a string'})
    title: string;
    columns: BoardColumn[];;
}
