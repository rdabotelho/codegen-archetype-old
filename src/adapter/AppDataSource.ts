import { DataSource } from "typeorm";
import * as config from 'config';
import * as path from 'path';

export const AppDataSource = new DataSource({
  "name": "default",
  "type": "sqlite",
  //"host": config.get('db.host').toString(),
  //"port": parseInt(config.get('db.port')),
  "database": config.get('db.database').toString(),
  "synchronize": true,
  "entities": [
    path.resolve('dist', 'entity') + "/*.js"
  ]
});
