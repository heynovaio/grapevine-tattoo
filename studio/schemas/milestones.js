export default {
  type: 'object',
  name: 'milestones',
  title: 'Milestones',
  fields: [
    {
      title: 'Year',
      name: 'value',
      type: 'string'
    },
    {
      type: 'array',
      name: 'milestone',
      title: 'Milestone',
      of: [{
        type: 'milestone'
      }]
    }
  ]
}

