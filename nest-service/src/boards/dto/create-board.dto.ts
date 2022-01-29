import BoardColumn from '../../columns/entities/column.entity';

export class CreateBoardDto {
    title: string;
    columns: BoardColumn[];;
}
