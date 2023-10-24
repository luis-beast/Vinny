import { db } from 'src/lib/db'

export const issueTemplates = () => {
  return db.issueTemplate.findMany()
}

export const issueTemplate = ({ id }) => {
  return db.issueTemplate.findUnique({
    where: { id },
  })
}

export const createIssueTemplate = ({ input }) => {
  return db.issueTemplate.create({
    data: input,
  })
}

export const updateIssueTemplate = ({ id, input }) => {
  return db.issueTemplate.update({
    data: input,
    where: { id },
  })
}

export const deleteIssueTemplate = ({ id }) => {
  return db.issueTemplate.delete({
    where: { id },
  })
}

export const IssueTemplate = {
  items_issuing: (_obj, { root }) => {
    return db.issueTemplate
      .findUnique({ where: { id: root?.id } })
      .items_issuing()
  },
  User: (_obj, { root }) => {
    return db.issueTemplate.findUnique({ where: { id: root?.id } }).User()
  },
}
