import { IsString, IsNotEmpty } from "class-validator";

export default class CreateUserDto {
    @IsString({message: 'could be a string'})
    readonly name: string;

    @IsString({message: 'could be a string'})
    // @IsNotEmpty()
    readonly login: string;

    @IsString({message: 'could be a string'})
    password: string;
}
