import IssueTemplate from 'src/components/IssueTemplate/IssueTemplate'

export const QUERY = gql`
  query FindIssueTemplateById($id: Int!) {
    issueTemplate: issueTemplate(id: $id) {
      id
      enlisted
      created_by
      created_on
      modified_by
      modified_on
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>IssueTemplate not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ issueTemplate }) => {
  return <IssueTemplate issueTemplate={issueTemplate} />
}
