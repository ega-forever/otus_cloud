import * as assert from 'assert';
import config from '../../../src/config';
import * as request from 'request-promise';

describe('counter', () => {


  it('should increment', async () => {

    const checkCurrentCount = await request({
      method: 'POST',
      uri: `http://${ config.rest.host }:${ config.rest.port }`,
      body: {
        operationName: null,
        variables: {},
        query: `query{\n  getCount}`
      },
      json: true
    });

    assert(checkCurrentCount.data.getCount === 0);

    const incrementCount = await request({
      method: 'POST',
      uri: `http://${ config.rest.host }:${ config.rest.port }`,
      body: {
        operationName: null,
        variables: {},
        query: `mutation{\n  increment}`
      },
      json: true
    });

    assert(incrementCount.data.increment === true);

    const checkCurrentCountChanged = await request({
      method: 'POST',
      uri: `http://${ config.rest.host }:${ config.rest.port }`,
      body: {
        operationName: null,
        variables: {},
        query: `query{\n  getCount}`
      },
      json: true
    });

    assert(checkCurrentCountChanged.data.getCount === 1);
  });

});
