import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, timeTag } from 'src/lib/formatters'

const DELETE_ISSUE_TEMPLATE_MUTATION = gql`
  mutation DeleteIssueTemplateMutation($id: Int!) {
    deleteIssueTemplate(id: $id) {
      id
    }
  }
`

const IssueTemplate = ({ issueTemplate }) => {
  const [deleteIssueTemplate] = useMutation(DELETE_ISSUE_TEMPLATE_MUTATION, {
    onCompleted: () => {
      toast.success('IssueTemplate deleted')
      navigate(routes.issueTemplates())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete issueTemplate ' + id + '?')) {
      deleteIssueTemplate({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            IssueTemplate {issueTemplate.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{issueTemplate.id}</td>
            </tr>
            <tr>
              <th>Enlisted</th>
              <td>{checkboxInputTag(issueTemplate.enlisted)}</td>
            </tr>
            <tr>
              <th>Created by</th>
              <td>{issueTemplate.created_by}</td>
            </tr>
            <tr>
              <th>Created on</th>
              <td>{timeTag(issueTemplate.created_on)}</td>
            </tr>
            <tr>
              <th>Modified by</th>
              <td>{issueTemplate.modified_by}</td>
            </tr>
            <tr>
              <th>Modified on</th>
              <td>{timeTag(issueTemplate.modified_on)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editIssueTemplate({ id: issueTemplate.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(issueTemplate.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default IssueTemplate
