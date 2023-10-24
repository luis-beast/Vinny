export const schema = gql`
  type User {
    id: Int!
    email: String!
    password: String!
    salt: String!
    hash: String!
    hashedPassword: String!
    name: String!
    enlisted: Boolean!
    roles: String!
    created_by: String!
    created_on: DateTime!
    modified_by: String!
    modified_on: DateTime!
    items: [InventoryItem]!
    item_template: IssueTemplate!
    issueTemplateId: Int!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    password: String!
    salt: String!
    hash: String!
    hashedPassword: String!
    name: String!
    enlisted: Boolean!
    roles: String!
    created_by: String!
    created_on: DateTime!
    modified_by: String!
    modified_on: DateTime!
    issueTemplateId: Int!
  }

  input UpdateUserInput {
    email: String
    password: String
    salt: String
    hash: String
    hashedPassword: String
    name: String
    enlisted: Boolean
    roles: String
    created_by: String
    created_on: DateTime
    modified_by: String
    modified_on: DateTime
    issueTemplateId: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
