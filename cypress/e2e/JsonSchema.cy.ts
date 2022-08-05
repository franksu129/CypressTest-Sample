// cypress\e2e\JsonSchema.cy.ts
let Schema = {
  title: 'my Schema',
  type: 'object',
  required: ['id', 'name', 'email'],
  properties: {
    id: {
      type: 'integer',
    },
    email: {
      type: 'string',
    },
    body: {
      type: 'string',
    },
  },
}

describe('JsonSchema testing OK or NG', () => {
  it('Json OK', () => {
    let JsonDataOK = {
      "id": 10,
      "name": "cypress",
      "email": "hello@cypress.io",
    };
    
    expect(JsonDataOK).to.be.jsonSchema(Schema);
  });

  it('Json NG', () => {
    let JsonDataNG = {
      "name": "cypress",
      "email": "hello@cypress.io",
    };
  
    expect(JsonDataNG).to.be.jsonSchema(Schema);
  });
})
