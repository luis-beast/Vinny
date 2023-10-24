import {
  Form,
  FormError,
  FieldError,
  Label,
  CheckboxField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const IssueTemplateForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.issueTemplate?.id)
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
          name="enlisted"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Enlisted
        </Label>

        <CheckboxField
          name="enlisted"
          defaultChecked={props.issueTemplate?.enlisted}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="enlisted" className="rw-field-error" />

        <Label
          name="created_by"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Created by
        </Label>

        <TextField
          name="created_by"
          defaultValue={props.issueTemplate?.created_by}
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
          defaultValue={props.issueTemplate?.modified_by}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="modified_by" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default IssueTemplateForm
