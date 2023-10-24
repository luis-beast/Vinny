import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_ITEM_CATEGORY_MUTATION = gql`
  mutation DeleteItemCategoryMutation($id: Int!) {
    deleteItemCategory(id: $id) {
      id
    }
  }
`

const ItemCategory = ({ itemCategory }) => {
  const [deleteItemCategory] = useMutation(DELETE_ITEM_CATEGORY_MUTATION, {
    onCompleted: () => {
      toast.success('ItemCategory deleted')
      navigate(routes.itemCategories())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete itemCategory ' + id + '?')) {
      deleteItemCategory({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ItemCategory {itemCategory.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{itemCategory.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{itemCategory.name}</td>
            </tr>
            <tr>
              <th>Created by</th>
              <td>{itemCategory.created_by}</td>
            </tr>
            <tr>
              <th>Created on</th>
              <td>{timeTag(itemCategory.created_on)}</td>
            </tr>
            <tr>
              <th>Modified by</th>
              <td>{itemCategory.modified_by}</td>
            </tr>
            <tr>
              <th>Modified on</th>
              <td>{timeTag(itemCategory.modified_on)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editItemCategory({ id: itemCategory.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(itemCategory.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ItemCategory
