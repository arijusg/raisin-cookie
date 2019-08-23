
import { assert } from 'chai';
import * as sinon from 'sinon';

import { RaisinCookie } from './raisin-cookie';

describe('Raisin Cookie', async () => {

    let consoleStub: sinon.SinonStub;

    let raisinCookie: RaisinCookie;

    beforeEach(() => {
        consoleStub = sinon.stub(console, 'log');
        raisinCookie = new RaisinCookie();
    });

    afterEach(() => {
        consoleStub.restore();
    });

    it('should', async () => {
        raisinCookie.start();
        sinon.assert.calledWith(consoleStub, 'Raisin and a cookie')
    });
});
