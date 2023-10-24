import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import IssueTemplateForm from 'src/components/IssueTemplate/IssueTemplateForm'

const CREATE_ISSUE_TEMPLATE_MUTATION = gql`
  mutation CreateIssueTemplateMutation($input: CreateIssueTemplateInput!) {
    createIssueTemplate(input: $input) {
      id
    }
  }
`

const NewIssueTemplate = () => {
  const [createIssueTemplate, { loading, error }] = useMutation(
    CREATE_ISSUE_TEMPLATE_MUTATION,
    {
      onCompleted: () => {
        toast.success('IssueTemplate created')
        navigate(routes.issueTemplates())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createIssueTemplate({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New IssueTemplate</h2>
      </header>
      <div className="rw-segment-main">
        <IssueTemplateForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewIssueTemplate
