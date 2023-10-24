import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_INVENTORY_ITEM_MUTATION = gql`
  mutation DeleteInventoryItemMutation($id: Int!) {
    deleteInventoryItem(id: $id) {
      id
    }
  }
`

const InventoryItem = ({ inventoryItem }) => {
  const [deleteInventoryItem] = useMutation(DELETE_INVENTORY_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('InventoryItem deleted')
      navigate(routes.inventoryItems())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete inventoryItem ' + id + '?')) {
      deleteInventoryItem({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            InventoryItem {inventoryItem.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{inventoryItem.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{inventoryItem.name}</td>
            </tr>
            <tr>
              <th>Size</th>
              <td>{inventoryItem.size}</td>
            </tr>
            <tr>
              <th>Current amount</th>
              <td>{inventoryItem.current_amount}</td>
            </tr>
            <tr>
              <th>Low amount</th>
              <td>{inventoryItem.low_amount}</td>
            </tr>
            <tr>
              <th>Sufficient amount</th>
              <td>{inventoryItem.sufficient_amount}</td>
            </tr>
            <tr>
              <th>Issued by</th>
              <td>{inventoryItem.issued_by}</td>
            </tr>
            <tr>
              <th>Created by</th>
              <td>{inventoryItem.created_by}</td>
            </tr>
            <tr>
              <th>Created on</th>
              <td>{timeTag(inventoryItem.created_on)}</td>
            </tr>
            <tr>
              <th>Modified by</th>
              <td>{inventoryItem.modified_by}</td>
            </tr>
            <tr>
              <th>Modified on</th>
              <td>{timeTag(inventoryItem.modified_on)}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{inventoryItem.user_id}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editInventoryItem({ id: inventoryItem.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(inventoryItem.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default InventoryItem
