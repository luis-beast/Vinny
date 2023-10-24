import { Link, routes } from '@redwoodjs/router'

import InventoryItems from 'src/components/InventoryItem/InventoryItems'

export const QUERY = gql`
  query FindInventoryItems {
    inventoryItems {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No inventoryItems yet. '}
      <Link to={routes.newInventoryItem()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ inventoryItems }) => {
  return <InventoryItems inventoryItems={inventoryItems} />
}
