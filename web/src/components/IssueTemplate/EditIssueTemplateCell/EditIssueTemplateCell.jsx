import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import IssueTemplateForm from 'src/components/IssueTemplate/IssueTemplateForm'

export const QUERY = gql`
  query EditIssueTemplateById($id: Int!) {
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
const UPDATE_ISSUE_TEMPLATE_MUTATION = gql`
  mutation UpdateIssueTemplateMutation(
    $id: Int!
    $input: UpdateIssueTemplateInput!
  ) {
    updateIssueTemplate(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ issueTemplate }) => {
  const [updateIssueTemplate, { loading, error }] = useMutation(
    UPDATE_ISSUE_TEMPLATE_MUTATION,
    {
      onCompleted: () => {
        toast.success('IssueTemplate updated')
        navigate(routes.issueTemplates())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateIssueTemplate({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit IssueTemplate {issueTemplate?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <IssueTemplateForm
          issueTemplate={issueTemplate}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
