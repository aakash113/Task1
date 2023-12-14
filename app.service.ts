import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { YourDto } from './dto';

// @ts-ignore
@Injectable()
export class AppService {
    // @ts-ignore
    constructor(@InjectModel('YourModelName') private readonly yourModel: Model<any>) {}

    async getData() {
        return this.yourModel.find().exec();
    }

    async postData(data: YourDto) {
        const createdData = new this.yourModel(data);
        return createdData.save();
    }
}
