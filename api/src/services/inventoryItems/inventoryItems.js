import { db } from 'src/lib/db'

export const inventoryItems = () => {
  return db.inventoryItem.findMany()
}

export const inventoryItem = ({ id }) => {
  return db.inventoryItem.findUnique({
    where: { id },
  })
}

export const createInventoryItem = ({ input }) => {
  return db.inventoryItem.create({
    data: input,
  })
}

export const updateInventoryItem = ({ id, input }) => {
  return db.inventoryItem.update({
    data: input,
    where: { id },
  })
}

export const deleteInventoryItem = ({ id }) => {
  return db.inventoryItem.delete({
    where: { id },
  })
}

export const InventoryItem = {
  categories: (_obj, { root }) => {
    return db.inventoryItem.findUnique({ where: { id: root?.id } }).categories()
  },
  template: (_obj, { root }) => {
    return db.inventoryItem.findUnique({ where: { id: root?.id } }).template()
  },
  User: (_obj, { root }) => {
    return db.inventoryItem.findUnique({ where: { id: root?.id } }).User()
  },
}
