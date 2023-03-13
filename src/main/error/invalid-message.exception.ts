import {
  HttpException,
  HttpStatus,
} from '@nestjs/common';

export class InvalidMessageException extends HttpException {
    constructor(){
        super("Invalid Message", HttpStatus.BAD_REQUEST)
    }
}