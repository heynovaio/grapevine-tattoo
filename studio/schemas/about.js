export default {
  name: 'about',
  title: 'About',
  type: 'document',
  liveEdit: false,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'years',
      title: 'Timeline',
      type: 'years'
    }
  ]
}
