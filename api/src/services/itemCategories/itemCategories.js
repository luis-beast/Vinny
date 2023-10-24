import { db } from 'src/lib/db'

export const itemCategories = () => {
  return db.itemCategory.findMany()
}

export const itemCategory = ({ id }) => {
  return db.itemCategory.findUnique({
    where: { id },
  })
}

export const createItemCategory = ({ input }) => {
  return db.itemCategory.create({
    data: input,
  })
}

export const updateItemCategory = ({ id, input }) => {
  return db.itemCategory.update({
    data: input,
    where: { id },
  })
}

export const deleteItemCategory = ({ id }) => {
  return db.itemCategory.delete({
    where: { id },
  })
}

export const ItemCategory = {
  items: (_obj, { root }) => {
    return db.itemCategory.findUnique({ where: { id: root?.id } }).items()
  },
}
