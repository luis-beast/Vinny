import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    // const data = [
    // To try this example data with the UserExample model in schema.prisma,
    // uncomment the lines below and run 'yarn rw prisma migrate dev'
    //
    // { name: 'alice', email: 'alice@example.com' },
    // { name: 'mark', email: 'mark@example.com' },
    // { name: 'jackie', email: 'jackie@example.com' },
    // { name: 'bob', email: 'bob@example.com' },
    // ]

    const users = [
      //User
      {
        email: 'luis@perez.com',
        password: '321',
        salt: 'HI',
        hash: 'String',
        hashedPassword: 'password',
        name: 'Luis Perez',
        enlisted: true,
        roles: 'super',
        item_template: { connect: { id: 1 } },
      },
    ]

    const issueTemplateItems = [{ enlisted: true }]

    const itemCategories = [
      //Categories
      {
        id: 1,
        name: 'Serket',
      },
      {
        id: 2,
        name: 'Mechanix',
      },
    ]

    const inventoryItems = [
      //Items
      //Serket Top
      {
        name: 'Serket Top',
        size: 'XSS',
        current_amount: 15,
        low_amount: 5,
        sufficient_amount: 10,
        categories: {
          connect: [{ id: 1 }],
        },
      },
      {
        name: 'Serket Top',
        size: 'XSR',
        current_amount: 15,
        low_amount: 5,
        sufficient_amount: 10,
        categories: {
          connect: [{ id: 1 }],
        },
      },
      {
        name: 'Serket Top',
        size: 'XSL',
        current_amount: 15,
        low_amount: 5,
        sufficient_amount: 10,
        categories: {
          connect: [{ id: 1 }],
        },
      },
      {
        name: 'Serket Top',
        size: 'SS',
        current_amount: 15,
        low_amount: 5,
        sufficient_amount: 10,
        categories: {
          connect: [{ id: 1 }],
        },
      },
      {
        name: 'Serket Top',
        size: 'SR',
        current_amount: 15,
        low_amount: 5,
        sufficient_amount: 10,
        categories: {
          connect: [{ id: 1 }],
        },
      },
      {
        name: 'Serket Top',
        size: 'SL',
        current_amount: 15,
        low_amount: 5,
        sufficient_amount: 10,
        categories: {
          connect: [{ id: 1 }],
        },
      },
      {
        name: 'Serket Top',
        size: 'MS',
        current_amount: 15,
        low_amount: 5,
        sufficient_amount: 10,
        categories: {
          connect: [{ id: 1 }],
        },
      },
      {
        name: 'Serket Top',
        size: 'MR',
        current_amount: 15,
        low_amount: 5,
        sufficient_amount: 10,
        categories: {
          connect: [{ id: 1 }],
        },
      },
      {
        name: 'Serket Top',
        size: 'ML',
        current_amount: 15,
        low_amount: 5,
        sufficient_amount: 10,
        categories: {
          connect: [{ id: 1 }],
        },
      },
      {
        name: 'Serket Top',
        size: 'LS',
        current_amount: 15,
        low_amount: 5,
        sufficient_amount: 10,
        categories: {
          connect: [{ id: 1 }],
        },
      },
      {
        name: 'Serket Top',
        size: 'LR',
        current_amount: 15,
        low_amount: 5,
        sufficient_amount: 10,
        categories: {
          connect: [{ id: 1 }],
        },
      },
      {
        name: 'Serket Top',
        size: 'LL',
        current_amount: 15,
        low_amount: 5,
        sufficient_amount: 10,
        categories: {
          connect: [{ id: 1 }],
        },
      },
      {
        name: 'Serket Top',
        size: 'XLS',
        current_amount: 15,
        low_amount: 5,
        sufficient_amount: 10,
        categories: {
          connect: [{ id: 1 }],
        },
      },
      {
        name: 'Serket Top',
        size: 'XLR',
        current_amount: 15,
        low_amount: 5,
        sufficient_amount: 10,
        categories: {
          connect: [{ id: 1 }],
        },
      },
      {
        name: 'Serket Top',
        size: 'XLL',
        current_amount: 15,
        low_amount: 5,
        sufficient_amount: 10,
        categories: {
          connect: [{ id: 1 }],
        },
      },

      //Mechanix
      {
        name: 'Mechanix Gloves',
        size: 'S',
        current_amount: 15,
        low_amount: 5,
        sufficient_amount: 10,
        categories: {
          connect: [{ id: 2 }],
        },
      },
      {
        name: 'Mechanix Gloves',
        size: 'M',
        current_amount: 15,
        low_amount: 5,
        sufficient_amount: 10,
        categories: {
          connect: [{ id: 2 }],
        },
      },
      {
        name: 'Mechanix Gloves',
        size: 'L',
        current_amount: 15,
        low_amount: 5,
        sufficient_amount: 10,
        categories: {
          connect: [{ id: 2 }],
        },
      },
      {
        name: 'Mechanix Gloves',
        size: 'XL',
        current_amount: 15,
        low_amount: 5,
        sufficient_amount: 10,
        categories: {
          connect: [{ id: 2 }],
        },
      },
      {
        name: 'Mechanix Gloves',
        size: 'XXL',
        current_amount: 15,
        low_amount: 5,
        sufficient_amount: 10,
        categories: {
          connect: [{ id: 2 }],
        },
      },
    ]

    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    // await Promise.all(
    //   //
    //   // Change to match your data model and seeding needs
    //   //
    //   data.map(async (data) => {
    //     const record = await db.userExample.create({ data })
    //     console.log(record)
    //   })
    // )

    // If using dbAuth and seeding users, you'll need to add a `hashedPassword`
    // and associated `salt` to their record. Here's how to create them using
    // the same algorithm that dbAuth uses internally:
    //
    //   import { hashPassword } from '@redwoodjs/auth-dbauth-api'
    //
    //   const users = [
    //     { name: 'john', email: 'john@example.com', password: 'secret1' },
    //     { name: 'jane', email: 'jane@example.com', password: 'secret2' }
    //   ]
    //
    //   for (const user of users) {
    //     const [hashedPassword, salt] = hashPassword(user.password)
    //     await db.user.create({
    //       data: {
    //         name: user.name,
    //         email: user.email,
    //         hashedPassword,
    //         salt
    //       }
    //     })
    //   }

    console.log('Seeding issue template...')
    await Promise.all(
      issueTemplateItems.map(async (template) => {
        const record = await db.issueTemplate.create({
          data: { ...template },
        })
        console.log('Issue template seeded:', record)
      })
    )
    console.log('Issue template seeded successfully.')

    console.log('Seeding users...')
    await Promise.all(
      users.map(async (user) => {
        const record = await db.user.create({
          data: { ...user },
        })
        console.log('User seeded:', record)
      })
    )
    console.log('Users seeded successfully.')

    console.log('Seeding item categories...')
    await Promise.all(
      itemCategories.map(async (category) => {
        const record = await db.itemCategory.create({
          data: { ...category },
        })
        console.log('Item category seeded:', record)
      })
    )
    console.log('Item categories seeded successfully.')

    console.log('Seeding inventory items...')
    await Promise.all(
      inventoryItems.map(async (item) => {
        const record = await db.inventoryItem.create({
          data: { ...item },
        })
        console.log('Inventory item seeded:', record)
      })
    )
    console.log('Inventory items seeded successfully.')
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
