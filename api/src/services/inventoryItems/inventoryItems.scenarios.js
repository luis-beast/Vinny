export const standard = defineScenario({
  inventoryItem: {
    one: {
      data: {
        name: 'String',
        current_amount: 8371135,
        low_amount: 939167,
        sufficient_amount: 7579301,
        User: {
          create: {
            email: 'String7489758',
            salt: 'String',
            hash: 'String',
            hashedPassword: 'String',
            name: 'String',
            enlisted: true,
            item_template: { create: { enlisted: true } },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        current_amount: 504865,
        low_amount: 3964315,
        sufficient_amount: 9291657,
        User: {
          create: {
            email: 'String7925777',
            salt: 'String',
            hash: 'String',
            hashedPassword: 'String',
            name: 'String',
            enlisted: true,
            item_template: { create: { enlisted: true } },
          },
        },
      },
    },
  },
})
