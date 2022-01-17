import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
// import Board from '../boards/board.entity';
// import BoardColumn from '../columns/column.model';
// import User from '../users/user.entity';

@Entity()
export default class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({type: 'text', nullable: true})
    userId: string | null;
    
    @Column({type: 'text', nullable: true})
    boardId: string | null;
    
    @Column({type: 'text', nullable: true})
    columnId: string | null;
    
    @Column()
    order: number;
}