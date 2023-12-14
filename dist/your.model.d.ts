import * as mongoose from 'mongoose';
export declare const YourSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string | null | undefined;
    status?: boolean | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name?: string | null | undefined;
    status?: boolean | null | undefined;
}>> & mongoose.FlatRecord<{
    name?: string | null | undefined;
    status?: boolean | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export declare const YourModel: mongoose.Model<{
    name?: string | null | undefined;
    status?: boolean | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name?: string | null | undefined;
    status?: boolean | null | undefined;
}> & {
    name?: string | null | undefined;
    status?: boolean | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string | null | undefined;
    status?: boolean | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name?: string | null | undefined;
    status?: boolean | null | undefined;
}>> & mongoose.FlatRecord<{
    name?: string | null | undefined;
    status?: boolean | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
