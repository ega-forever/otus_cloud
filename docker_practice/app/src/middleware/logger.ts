import * as bunyan from 'bunyan';
import config from '../config';

const logger = bunyan.createLogger({ name: 'core.rest.middleware', level: config.logLevel });

export default (req, res, next) => {

  const start = Date.now();
  const id = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);

  logger.info({
    fromIP: req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress,
    method: req.method,
    originalUri: req.originalUrl,
    uri: req.url,
    requestData: JSON.stringify(req.body).includes('password') ? 'xxx' : req.body,
    referer: req.headers.referer || '',
    ua: req.headers['user-agent'],
    reqId: id
  });

  res.once('finish', () => {
    logger.info({
      reqId: id,
      took: `${ Date.now() - start }ms`
    });

  });

  next();
};
