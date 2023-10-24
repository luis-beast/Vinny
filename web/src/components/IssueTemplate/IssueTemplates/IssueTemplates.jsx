import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/IssueTemplate/IssueTemplatesCell'
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters'

const DELETE_ISSUE_TEMPLATE_MUTATION = gql`
  mutation DeleteIssueTemplateMutation($id: Int!) {
    deleteIssueTemplate(id: $id) {
      id
    }
  }
`

const IssueTemplatesList = ({ issueTemplates }) => {
  const [deleteIssueTemplate] = useMutation(DELETE_ISSUE_TEMPLATE_MUTATION, {
    onCompleted: () => {
      toast.success('IssueTemplate deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete issueTemplate ' + id + '?')) {
      deleteIssueTemplate({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Enlisted</th>
            <th>Created by</th>
            <th>Created on</th>
            <th>Modified by</th>
            <th>Modified on</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {issueTemplates.map((issueTemplate) => (
            <tr key={issueTemplate.id}>
              <td>{truncate(issueTemplate.id)}</td>
              <td>{checkboxInputTag(issueTemplate.enlisted)}</td>
              <td>{truncate(issueTemplate.created_by)}</td>
              <td>{timeTag(issueTemplate.created_on)}</td>
              <td>{truncate(issueTemplate.modified_by)}</td>
              <td>{timeTag(issueTemplate.modified_on)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.issueTemplate({ id: issueTemplate.id })}
                    title={'Show issueTemplate ' + issueTemplate.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editIssueTemplate({ id: issueTemplate.id })}
                    title={'Edit issueTemplate ' + issueTemplate.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete issueTemplate ' + issueTemplate.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(issueTemplate.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default IssueTemplatesList
