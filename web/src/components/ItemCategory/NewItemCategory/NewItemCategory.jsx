import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ItemCategoryForm from 'src/components/ItemCategory/ItemCategoryForm'

const CREATE_ITEM_CATEGORY_MUTATION = gql`
  mutation CreateItemCategoryMutation($input: CreateItemCategoryInput!) {
    createItemCategory(input: $input) {
      id
    }
  }
`

const NewItemCategory = () => {
  const [createItemCategory, { loading, error }] = useMutation(
    CREATE_ITEM_CATEGORY_MUTATION,
    {
      onCompleted: () => {
        toast.success('ItemCategory created')
        navigate(routes.itemCategories())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createItemCategory({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ItemCategory</h2>
      </header>
      <div className="rw-segment-main">
        <ItemCategoryForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewItemCategory
