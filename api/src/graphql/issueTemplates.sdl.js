export const schema = gql`
  type IssueTemplate {
    id: Int!
    enlisted: Boolean!
    created_by: String!
    created_on: DateTime!
    modified_by: String!
    modified_on: DateTime!
    items_issuing: [InventoryItem]!
    User: [User]!
  }

  type Query {
    issueTemplates: [IssueTemplate!]! @requireAuth
    issueTemplate(id: Int!): IssueTemplate @requireAuth
  }

  input CreateIssueTemplateInput {
    enlisted: Boolean!
    created_by: String!
    created_on: DateTime!
    modified_by: String!
    modified_on: DateTime!
  }

  input UpdateIssueTemplateInput {
    enlisted: Boolean
    created_by: String
    created_on: DateTime
    modified_by: String
    modified_on: DateTime
  }

  type Mutation {
    createIssueTemplate(input: CreateIssueTemplateInput!): IssueTemplate!
      @requireAuth
    updateIssueTemplate(
      id: Int!
      input: UpdateIssueTemplateInput!
    ): IssueTemplate! @requireAuth
    deleteIssueTemplate(id: Int!): IssueTemplate! @requireAuth
  }
`
