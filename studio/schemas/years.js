export default {
  type: 'object',
  name: 'years',
  title: 'Years',
  fields: [{
    type: 'array',
    name: 'milestones',
    of: [{type: 'milestones'}]
  }]
}

