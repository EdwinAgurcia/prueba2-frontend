import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Prueba2DataSource} from '../datasources';
import {Usuariold, UsuarioldRelations} from '../models';

export class UsuarioldRepository extends DefaultCrudRepository<
  Usuariold,
  typeof Usuariold.prototype.id,
  UsuarioldRelations
> {
  constructor(
    @inject('datasources.prueba2') dataSource: Prueba2DataSource,
  ) {
    super(Usuariold, dataSource);
  }
}
