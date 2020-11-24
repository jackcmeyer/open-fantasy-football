import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return basic information', () => {
      jest.spyOn(Date, 'now').mockReturnValue(new Date().valueOf());
      expect(appController.getInfo()).toEqual({"name": "open-fantasy-football", "time": new Date(Date.now()).toISOString(), "version": "0.1.0"});
    });
  });
});
