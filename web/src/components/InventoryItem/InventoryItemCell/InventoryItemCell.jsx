import InventoryItem from 'src/components/InventoryItem/InventoryItem'

export const QUERY = gql`
  query FindInventoryItemById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>InventoryItem not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ inventoryItem }) => {
  return <InventoryItem inventoryItem={inventoryItem} />
}
