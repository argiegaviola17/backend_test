import { IsNotEmpty } from 'class-validator';

export class RequestDTO {

    @IsNotEmpty()
    conversation_id

    @IsNotEmpty()
    message
}