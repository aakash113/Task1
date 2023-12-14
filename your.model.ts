import * as mongoose from 'mongoose';

export const YourSchema = new mongoose.Schema({
    name: String,
    status: Boolean,
});

export const YourModel = mongoose.model('YourModelName', YourSchema);
