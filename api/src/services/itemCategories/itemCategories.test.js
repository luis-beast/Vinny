import {
  itemCategories,
  itemCategory,
  createItemCategory,
  updateItemCategory,
  deleteItemCategory,
} from './itemCategories'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('itemCategories', () => {
  scenario('returns all itemCategories', async (scenario) => {
    const result = await itemCategories()

    expect(result.length).toEqual(Object.keys(scenario.itemCategory).length)
  })

  scenario('returns a single itemCategory', async (scenario) => {
    const result = await itemCategory({ id: scenario.itemCategory.one.id })

    expect(result).toEqual(scenario.itemCategory.one)
  })

  scenario('creates a itemCategory', async () => {
    const result = await createItemCategory({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a itemCategory', async (scenario) => {
    const original = await itemCategory({
      id: scenario.itemCategory.one.id,
    })
    const result = await updateItemCategory({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a itemCategory', async (scenario) => {
    const original = await deleteItemCategory({
      id: scenario.itemCategory.one.id,
    })
    const result = await itemCategory({ id: original.id })

    expect(result).toEqual(null)
  })
})
