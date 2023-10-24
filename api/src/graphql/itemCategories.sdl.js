export const schema = gql`
  type ItemCategory {
    id: Int!
    name: String!
    created_by: String!
    created_on: DateTime!
    modified_by: String!
    modified_on: DateTime!
    items: [InventoryItem]!
  }

  type Query {
    itemCategories: [ItemCategory!]! @requireAuth
    itemCategory(id: Int!): ItemCategory @requireAuth
  }

  input CreateItemCategoryInput {
    name: String!
    created_by: String!
    created_on: DateTime!
    modified_by: String!
    modified_on: DateTime!
  }

  input UpdateItemCategoryInput {
    name: String
    created_by: String
    created_on: DateTime
    modified_by: String
    modified_on: DateTime
  }

  type Mutation {
    createItemCategory(input: CreateItemCategoryInput!): ItemCategory!
      @requireAuth
    updateItemCategory(
      id: Int!
      input: UpdateItemCategoryInput!
    ): ItemCategory! @requireAuth
    deleteItemCategory(id: Int!): ItemCategory! @requireAuth
  }
`
