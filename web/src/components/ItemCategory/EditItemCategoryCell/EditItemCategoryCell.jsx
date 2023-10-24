import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ItemCategoryForm from 'src/components/ItemCategory/ItemCategoryForm'

export const QUERY = gql`
  query EditItemCategoryById($id: Int!) {
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
const UPDATE_ITEM_CATEGORY_MUTATION = gql`
  mutation UpdateItemCategoryMutation(
    $id: Int!
    $input: UpdateItemCategoryInput!
  ) {
    updateItemCategory(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ itemCategory }) => {
  const [updateItemCategory, { loading, error }] = useMutation(
    UPDATE_ITEM_CATEGORY_MUTATION,
    {
      onCompleted: () => {
        toast.success('ItemCategory updated')
        navigate(routes.itemCategories())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateItemCategory({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ItemCategory {itemCategory?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ItemCategoryForm
          itemCategory={itemCategory}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
