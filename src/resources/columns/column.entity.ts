import {Column, Entity,/* JoinTable, RelationId, ManyToOne, */PrimaryGeneratedColumn} from 'typeorm'
// import Board from '../boards/board.entity'

@Entity()
export default class BoardColumn {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    order: number;

    // @RelationId((boardcolumn:BoardColumn) => boardcolumn.board)

    // @ManyToOne(() => Board, (board: Board) => board.columns)
    // @JoinTable()
    // board: Board
}