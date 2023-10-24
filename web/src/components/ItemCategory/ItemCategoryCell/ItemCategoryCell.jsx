import ItemCategory from 'src/components/ItemCategory/ItemCategory'

export const QUERY = gql`
  query FindItemCategoryById($id: Int!) {
    itemCategory: itemCategory(id: $id) {
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

export const Empty = () => <div>ItemCategory not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ itemCategory }) => {
  return <ItemCategory itemCategory={itemCategory} />
}
