import { IsNotEmpty, Length } from "class-validator";

export class CreateTaskDto {

    // @IsNotEmpty({ message: 'The name of the task is required' })
    // @Length(3, 255)
    // name: string;

    // @IsNotEmpty({ message: 'The description of the task is required' })
    // @Length(3)
    // description: string;

}
