import { RequestDTO } from './dto/request.dto';
import { MainService } from './main.service';
export declare class MainController {
    private readonly mainService;
    constructor(mainService: MainService);
    test(): string;
    findOne(req: RequestDTO): Promise<{
        response_id: any;
        response: any;
    }>;
}
