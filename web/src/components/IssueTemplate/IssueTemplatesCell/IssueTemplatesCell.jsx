import { Link, routes } from '@redwoodjs/router'

import IssueTemplates from 'src/components/IssueTemplate/IssueTemplates'

export const QUERY = gql`
  query FindIssueTemplates {
    issueTemplates {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No issueTemplates yet. '}
      <Link to={routes.newIssueTemplate()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ issueTemplates }) => {
  return <IssueTemplates issueTemplates={issueTemplates} />
}
