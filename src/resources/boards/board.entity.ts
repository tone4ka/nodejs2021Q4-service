import {Column, Entity,/* JoinTable, OneToMany, RelationId, */PrimaryGeneratedColumn} from 'typeorm'
import BoardColumn from '../columns/column.entity';

@Entity({ name: 'board' })
export default class Board {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column('simple-json', {nullable: true})
    columns: BoardColumn[];
}
