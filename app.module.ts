import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YourSchema } from './your.model';

// @ts-ignore
@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/project1-database'),
        MongooseModule.forFeature([{ name: 'YourModelName', schema: YourSchema }]),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
