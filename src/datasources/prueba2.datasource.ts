import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'prueba2',
  connector: 'mongodb',
  url: 'mongodb+srv://emac:2706@cluster0.b9nnd.mongodb.net/test',
  host: '0.0.0.0/0',
  port: 27017,
  user: 'emac',
  password: '2706',
  database: 'prueba2',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Prueba2DataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'prueba2';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.prueba2', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
