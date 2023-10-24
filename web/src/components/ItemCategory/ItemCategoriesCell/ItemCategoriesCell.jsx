import { Link, routes } from '@redwoodjs/router'

import ItemCategories from 'src/components/ItemCategory/ItemCategories'

export const QUERY = gql`
  query FindItemCategories {
    itemCategories {
      id
      name
      created_by
      created_on
      modified_by
      modified_on
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No itemCategories yet. '}
      <Link to={routes.newItemCategory()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ itemCategories }) => {
  return <ItemCategories itemCategories={itemCategories} />
}
