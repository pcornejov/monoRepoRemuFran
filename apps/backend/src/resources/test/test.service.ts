import { HttpStatus, Injectable } from '@nestjs/common';
import { TestCreateDto } from 'src/resources/test/test.dto';
import { TestRepository } from 'src/resources/test/test.repository';

@Injectable()
export class TestService {
    constructor(
        private readonly testRepository: TestRepository,
    ) {
    }

    async test(): Promise<string> {
        try {
            const testDto: TestCreateDto = {
                userRut: '111111'
            }
            const response = await this.testRepository.create(testDto);
            return 'ok';
        } catch (error: unknown) {
          console.log(error);
        }
    }
}
