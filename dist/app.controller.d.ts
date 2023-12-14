import { AppService } from './app.service';
import { YourDto } from './dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getData(): Promise<any[]>;
    postData(data: YourDto): Promise<any>;
}
