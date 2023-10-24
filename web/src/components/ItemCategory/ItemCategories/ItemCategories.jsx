import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ItemCategory/ItemCategoriesCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_ITEM_CATEGORY_MUTATION = gql`
  mutation DeleteItemCategoryMutation($id: Int!) {
    deleteItemCategory(id: $id) {
      id
    }
  }
`

const ItemCategoriesList = ({ itemCategories }) => {
  const [deleteItemCategory] = useMutation(DELETE_ITEM_CATEGORY_MUTATION, {
    onCompleted: () => {
      toast.success('ItemCategory deleted')
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
    if (confirm('Are you sure you want to delete itemCategory ' + id + '?')) {
      deleteItemCategory({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Created by</th>
            <th>Created on</th>
            <th>Modified by</th>
            <th>Modified on</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {itemCategories.map((itemCategory) => (
            <tr key={itemCategory.id}>
              <td>{truncate(itemCategory.id)}</td>
              <td>{truncate(itemCategory.name)}</td>
              <td>{truncate(itemCategory.created_by)}</td>
              <td>{timeTag(itemCategory.created_on)}</td>
              <td>{truncate(itemCategory.modified_by)}</td>
              <td>{timeTag(itemCategory.modified_on)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.itemCategory({ id: itemCategory.id })}
                    title={'Show itemCategory ' + itemCategory.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editItemCategory({ id: itemCategory.id })}
                    title={'Edit itemCategory ' + itemCategory.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete itemCategory ' + itemCategory.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(itemCategory.id)}
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

export default ItemCategoriesList
