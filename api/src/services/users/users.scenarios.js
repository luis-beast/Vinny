export const standard = defineScenario({
  user: {
    one: {
      data: {
        email: 'String5177940',
        salt: 'String',
        hash: 'String',
        hashedPassword: 'String',
        name: 'String',
        enlisted: true,
        item_template: { create: { enlisted: true } },
      },
    },
    two: {
      data: {
        email: 'String7957242',
        salt: 'String',
        hash: 'String',
        hashedPassword: 'String',
        name: 'String',
        enlisted: true,
        item_template: { create: { enlisted: true } },
      },
    },
  },
})
