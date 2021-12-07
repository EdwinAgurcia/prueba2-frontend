import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Usuariold} from '../models';
import {UsuarioldRepository} from '../repositories';

export class RecordController {
  constructor(
    @repository(UsuarioldRepository)
    public usuarioldRepository : UsuarioldRepository,
  ) {}

  @post('/usuariolds')
  @response(200, {
    description: 'Usuariold model instance',
    content: {'application/json': {schema: getModelSchemaRef(Usuariold)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuariold, {
            title: 'NewUsuariold',
            exclude: ['id'],
          }),
        },
      },
    })
    usuariold: Omit<Usuariold, 'id'>,
  ): Promise<Usuariold> {
    return this.usuarioldRepository.create(usuariold);
  }

  @get('/usuariolds/count')
  @response(200, {
    description: 'Usuariold model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Usuariold) where?: Where<Usuariold>,
  ): Promise<Count> {
    return this.usuarioldRepository.count(where);
  }

  @get('/usuariolds')
  @response(200, {
    description: 'Array of Usuariold model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Usuariold, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Usuariold) filter?: Filter<Usuariold>,
  ): Promise<Usuariold[]> {
    return this.usuarioldRepository.find(filter);
  }

  @patch('/usuariolds')
  @response(200, {
    description: 'Usuariold PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuariold, {partial: true}),
        },
      },
    })
    usuariold: Usuariold,
    @param.where(Usuariold) where?: Where<Usuariold>,
  ): Promise<Count> {
    return this.usuarioldRepository.updateAll(usuariold, where);
  }

  @get('/usuariolds/{id}')
  @response(200, {
    description: 'Usuariold model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Usuariold, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Usuariold, {exclude: 'where'}) filter?: FilterExcludingWhere<Usuariold>
  ): Promise<Usuariold> {
    return this.usuarioldRepository.findById(id, filter);
  }

  @patch('/usuariolds/{id}')
  @response(204, {
    description: 'Usuariold PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuariold, {partial: true}),
        },
      },
    })
    usuariold: Usuariold,
  ): Promise<void> {
    await this.usuarioldRepository.updateById(id, usuariold);
  }

  @put('/usuariolds/{id}')
  @response(204, {
    description: 'Usuariold PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() usuariold: Usuariold,
  ): Promise<void> {
    await this.usuarioldRepository.replaceById(id, usuariold);
  }

  @del('/usuariolds/{id}')
  @response(204, {
    description: 'Usuariold DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.usuarioldRepository.deleteById(id);
  }
}
