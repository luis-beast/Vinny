import {
  issueTemplates,
  issueTemplate,
  createIssueTemplate,
  updateIssueTemplate,
  deleteIssueTemplate,
} from './issueTemplates'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('issueTemplates', () => {
  scenario('returns all issueTemplates', async (scenario) => {
    const result = await issueTemplates()

    expect(result.length).toEqual(Object.keys(scenario.issueTemplate).length)
  })

  scenario('returns a single issueTemplate', async (scenario) => {
    const result = await issueTemplate({ id: scenario.issueTemplate.one.id })

    expect(result).toEqual(scenario.issueTemplate.one)
  })

  scenario('creates a issueTemplate', async () => {
    const result = await createIssueTemplate({
      input: { enlisted: true },
    })

    expect(result.enlisted).toEqual(true)
  })

  scenario('updates a issueTemplate', async (scenario) => {
    const original = await issueTemplate({
      id: scenario.issueTemplate.one.id,
    })
    const result = await updateIssueTemplate({
      id: original.id,
      input: { enlisted: false },
    })

    expect(result.enlisted).toEqual(false)
  })

  scenario('deletes a issueTemplate', async (scenario) => {
    const original = await deleteIssueTemplate({
      id: scenario.issueTemplate.one.id,
    })
    const result = await issueTemplate({ id: original.id })

    expect(result).toEqual(null)
  })
})
