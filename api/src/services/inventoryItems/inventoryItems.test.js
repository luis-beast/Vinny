import {
  inventoryItems,
  inventoryItem,
  createInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
} from './inventoryItems'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('inventoryItems', () => {
  scenario('returns all inventoryItems', async (scenario) => {
    const result = await inventoryItems()

    expect(result.length).toEqual(Object.keys(scenario.inventoryItem).length)
  })

  scenario('returns a single inventoryItem', async (scenario) => {
    const result = await inventoryItem({ id: scenario.inventoryItem.one.id })

    expect(result).toEqual(scenario.inventoryItem.one)
  })

  scenario('creates a inventoryItem', async () => {
    const result = await createInventoryItem({
      input: {
        name: 'String',
        current_amount: 7765349,
        low_amount: 8571457,
        sufficient_amount: 3217308,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.current_amount).toEqual(7765349)
    expect(result.low_amount).toEqual(8571457)
    expect(result.sufficient_amount).toEqual(3217308)
  })

  scenario('updates a inventoryItem', async (scenario) => {
    const original = await inventoryItem({
      id: scenario.inventoryItem.one.id,
    })
    const result = await updateInventoryItem({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a inventoryItem', async (scenario) => {
    const original = await deleteInventoryItem({
      id: scenario.inventoryItem.one.id,
    })
    const result = await inventoryItem({ id: original.id })

    expect(result).toEqual(null)
  })
})
