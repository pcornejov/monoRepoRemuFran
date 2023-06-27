import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model, Types } from 'mongoose';
import { Test } from 'src/resources/test/test.schema';

@Injectable()
export class TestRepository {
    private testModel: Model<Test>;

    constructor(@InjectModel(Test.name) audit: Model<Test>) {
        this.testModel = audit;
    }

    async create(test: Omit<Test, '_id'>): Promise<Test> {
        try {
            const document = await this.testModel.create({
                ...test,
                _id: new Types.ObjectId(),
            });

            return document;
        } catch (error) {
            console.log(error);
        }
    }
}
