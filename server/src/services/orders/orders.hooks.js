const {populate} = require('feathers-hooks-common');

const findSchema = {
  include: [{
    service: 'drinks',
    nameAs: 'drinkInfo',
    parentField: 'drink_id',
    childField: 'id'
  }]
}

module.exports = {
  before: {
    all: [],
    find: [context => {
      if(context.params.query.delivered === 'null'){
        console.log('si entro')
        context.params.query.delivered = null;
      }
      return context
    }],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [populate({schema: findSchema})],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
