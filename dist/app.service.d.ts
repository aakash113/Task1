import { Model } from 'mongoose';
import { YourDto } from './dto';
export declare class AppService {
    private readonly yourModel;
    constructor(yourModel: Model<any>);
    getData(): Promise<any[]>;
    postData(data: YourDto): Promise<any>;
}
