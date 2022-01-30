import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    login: string;

    @Column()
    password: string;
}
