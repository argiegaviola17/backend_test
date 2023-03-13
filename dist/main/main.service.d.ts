import { RequestDTO } from './dto/request.dto';
export declare class MainService {
    process(req: RequestDTO): Promise<{
        response_id: any;
        response: any;
    }>;
    getCorrectMessage(message: any): any;
}
