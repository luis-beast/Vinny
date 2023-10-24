import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InventoryItemForm from 'src/components/InventoryItem/InventoryItemForm'

export const QUERY = gql`
  query EditInventoryItemById($id: Int!) {
    inventoryItem: inventoryItem(id: $id) {
      id
      name
      size
      current_amount
      low_amount
      sufficient_amount
      issued_by
      created_by
      created_on
      modified_by
      modified_on
      user_id
    }
  }
`
const UPDATE_INVENTORY_ITEM_MUTATION = gql`
  mutation UpdateInventoryItemMutation(
    $id: Int!
    $input: UpdateInventoryItemInput!
  ) {
    updateInventoryItem(id: $id, input: $input) {
      id
      name
      size
      current_amount
      low_amount
      sufficient_amount
      issued_by
      created_by
      created_on
      modified_by
      modified_on
      user_id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ inventoryItem }) => {
  const [updateInventoryItem, { loading, error }] = useMutation(
    UPDATE_INVENTORY_ITEM_MUTATION,
    {
      onCompleted: () => {
        toast.success('InventoryItem updated')
        navigate(routes.inventoryItems())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateInventoryItem({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit InventoryItem {inventoryItem?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <InventoryItemForm
          inventoryItem={inventoryItem}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
