import { ExpressConfig } from "../middleware/common/Express";
import * as config from 'config';
import { logger } from '../util/logger';
import { AppDataSource } from '../adapter/AppDataSource';


export class Application {

  server: any;
  express: ExpressConfig;

  constructor() { 
    this.express = new ExpressConfig();

    AppDataSource.initialize()
      .then(() => {
        logger.info(`
        ------------------------------
        Database sqlite Connection Established
        ------------------------------
        `)
      })
      .catch((error) => {
        logger.error(error);
      });

    const port      = config.get('express.port');
   
    this.server = this.express.app.listen(port, () => {
      logger.info(`
      -------------------------------------------------
      Server Started! Express: http://localhost:${port}
      Health: http://localhost:${port}/health
      -------------------------------------------------
      `)
    })
  }

}