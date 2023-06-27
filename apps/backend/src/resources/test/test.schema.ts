import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { SchemaTypes, Types } from 'mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Test {
    @Prop({ type: SchemaTypes.ObjectId })
        _id: Types.ObjectId;

    @Prop({ type: String, required: false, index: true })
    userRut: string;
}

export const TestSchema = SchemaFactory.createForClass(Test);
