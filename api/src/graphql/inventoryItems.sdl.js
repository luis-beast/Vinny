export const schema = gql`
  type InventoryItem {
    id: Int!
    name: String!
    size: String
    current_amount: Int!
    low_amount: Int!
    sufficient_amount: Int!
    issued_by: String!
    created_by: String!
    created_on: DateTime!
    modified_by: String!
    modified_on: DateTime!
    categories: [ItemCategory]!
    template: [IssueTemplate]!
    User: User!
    user_id: Int!
  }

  type Query {
    inventoryItems: [InventoryItem!]! @requireAuth
    inventoryItem(id: Int!): InventoryItem @requireAuth
  }

  input CreateInventoryItemInput {
    name: String!
    size: String
    current_amount: Int!
    low_amount: Int!
    sufficient_amount: Int!
    issued_by: String!
    created_by: String!
    created_on: DateTime!
    modified_by: String!
    modified_on: DateTime!
    user_id: Int!
  }

  input UpdateInventoryItemInput {
    name: String
    size: String
    current_amount: Int
    low_amount: Int
    sufficient_amount: Int
    issued_by: String
    created_by: String
    created_on: DateTime
    modified_by: String
    modified_on: DateTime
    user_id: Int
  }

  type Mutation {
    createInventoryItem(input: CreateInventoryItemInput!): InventoryItem!
      @requireAuth
    updateInventoryItem(
      id: Int!
      input: UpdateInventoryItemInput!
    ): InventoryItem! @requireAuth
    deleteInventoryItem(id: Int!): InventoryItem! @requireAuth
  }
`
