import {Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Usuariold extends Model {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
  })
  nivel?: number;

  @property({
    type: 'string',
  })
  puntaje?: string;

  @property({
    type: 'string',
  })
  fecha?: string;

  @property({
    type: 'number',
  })
  usuariold?: number;

  @property({
    type: 'number',
  })
  segundos?: number;

  @property({
    type: 'boolean',
  })
  finalizado?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Usuariold>) {
    super(data);
  }
}

export interface UsuarioldRelations {
  // describe navigational properties here
}

export type UsuarioldWithRelations = Usuariold & UsuarioldRelations;
