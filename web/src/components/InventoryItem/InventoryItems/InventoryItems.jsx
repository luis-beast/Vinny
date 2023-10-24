import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/InventoryItem/InventoryItemsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_INVENTORY_ITEM_MUTATION = gql`
  mutation DeleteInventoryItemMutation($id: Int!) {
    deleteInventoryItem(id: $id) {
      id
    }
  }
`

const InventoryItemsList = ({ inventoryItems }) => {
  const [deleteInventoryItem] = useMutation(DELETE_INVENTORY_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('InventoryItem deleted')
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
    if (confirm('Are you sure you want to delete inventoryItem ' + id + '?')) {
      deleteInventoryItem({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Size</th>
            <th>Current amount</th>
            <th>Low amount</th>
            <th>Sufficient amount</th>
            <th>Issued by</th>
            <th>Created by</th>
            <th>Created on</th>
            <th>Modified by</th>
            <th>Modified on</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {inventoryItems.map((inventoryItem) => (
            <tr key={inventoryItem.id}>
              <td>{truncate(inventoryItem.id)}</td>
              <td>{truncate(inventoryItem.name)}</td>
              <td>{truncate(inventoryItem.size)}</td>
              <td>{truncate(inventoryItem.current_amount)}</td>
              <td>{truncate(inventoryItem.low_amount)}</td>
              <td>{truncate(inventoryItem.sufficient_amount)}</td>
              <td>{truncate(inventoryItem.issued_by)}</td>
              <td>{truncate(inventoryItem.created_by)}</td>
              <td>{timeTag(inventoryItem.created_on)}</td>
              <td>{truncate(inventoryItem.modified_by)}</td>
              <td>{timeTag(inventoryItem.modified_on)}</td>
              <td>{truncate(inventoryItem.user_id)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.inventoryItem({ id: inventoryItem.id })}
                    title={'Show inventoryItem ' + inventoryItem.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editInventoryItem({ id: inventoryItem.id })}
                    title={'Edit inventoryItem ' + inventoryItem.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete inventoryItem ' + inventoryItem.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(inventoryItem.id)}
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

export default InventoryItemsList
