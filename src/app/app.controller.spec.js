import AppController from './app.controller';

describe('AppController', () => {
    it('must be create', () => {
        const appController = new AppController();
        expect(appController).toBeDefined();
    })
})