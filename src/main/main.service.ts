import { Injectable } from '@nestjs/common';

import { RequestDTO } from './dto/request.dto';
import { InvalidMessageException } from './error/invalid-message.exception';

const CONTEXT_MAP = {
  "Hello": "Welcome to StationFive.",
  "Hi": "Welcome to StationFive.",

  "Goodbye": "Thank you, see you around.",
  "bye": "Thank you, see you around.",

  "No Context": "Sorry, I don't understand.",
}
@Injectable()
export class MainService {

  
  async process(req: RequestDTO) {
    const correctMessage = this.getCorrectMessage(req.message);
    if(!correctMessage){
      throw new InvalidMessageException();
    }
    return {
      response_id: req.conversation_id,
      response: correctMessage
    }
  }
  getCorrectMessage(message: any) {
 
    let words = message.split(" ");
    console.log("words: ",words);
    for(let word of words){
      word = word.replace(/[^a-zA-Z!0-9]/gi, '');
      console.log("new word ",word);
      const response = CONTEXT_MAP[word];
      if(response){
        return response;
      }
    }
    return null;
  }
}
