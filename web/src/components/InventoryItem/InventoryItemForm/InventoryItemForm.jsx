import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const InventoryItemForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.inventoryItem?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.inventoryItem?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="size"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Size
        </Label>

        <TextField
          name="size"
          defaultValue={props.inventoryItem?.size}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="size" className="rw-field-error" />

        <Label
          name="current_amount"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Current amount
        </Label>

        <NumberField
          name="current_amount"
          defaultValue={props.inventoryItem?.current_amount}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="current_amount" className="rw-field-error" />

        <Label
          name="low_amount"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Low amount
        </Label>

        <NumberField
          name="low_amount"
          defaultValue={props.inventoryItem?.low_amount}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="low_amount" className="rw-field-error" />

        <Label
          name="sufficient_amount"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sufficient amount
        </Label>

        <NumberField
          name="sufficient_amount"
          defaultValue={props.inventoryItem?.sufficient_amount}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="sufficient_amount" className="rw-field-error" />

        <Label
          name="issued_by"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Issued by
        </Label>

        <TextField
          name="issued_by"
          defaultValue={props.inventoryItem?.issued_by}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="issued_by" className="rw-field-error" />

        <Label
          name="created_by"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Created by
        </Label>

        <TextField
          name="created_by"
          defaultValue={props.inventoryItem?.created_by}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="created_by" className="rw-field-error" />

        <Label
          name="modified_by"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Modified by
        </Label>

        <TextField
          name="modified_by"
          defaultValue={props.inventoryItem?.modified_by}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="modified_by" className="rw-field-error" />

        <Label
          name="user_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <NumberField
          name="user_id"
          defaultValue={props.inventoryItem?.user_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="user_id" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default InventoryItemForm
