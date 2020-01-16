import { MdPerson } from 'react-icons/md'

export default {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  icon: MdPerson,
  fields: [
    {
      name: 'title',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the artist',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      title: 'Start Date',
      description: 'You can use this field to put artists in a particular order',
      type: 'datetime'
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Cover Image',
      type: 'mainImage',
      options: {
        hotspot: true
      }
    },
    {
      name: 'where',
      title: 'Where Im From',
      type: 'string'
    },
    {
      name: 'favedrink',
      title: 'What is your favourite drink',
      type: 'string'
    },
    {
      name: 'style',
      title: 'Specialization/Style',
      type: 'string'
    },
    {
      name: 'dreamProject',
      title: 'Dream Project',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Thumb Image',
      type: 'mainImage',
      options: {
        hotspot: true
      }
    },
    {
      name: 'youtube',
      title: 'Youtube Handle',
      type: 'string',
    },
    {
      name: 'instagram',
      title: 'IG Handle',
      type: 'string',
    },
    {
      name: 'facebook',
      title: 'FB Handle',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Contact Directly',
      type: 'email',
    },
    {
      name: 'bookinglink',
      title: 'Booking URL',
      type: 'url'
    },
    {
      name: 'videolink',
      title: 'Video URL',
      type: 'url'
    },
    {
      name: 'gallery',
      title: 'Work',
      type: 'slideshow',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockText'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],
  orderings: [
    {
      title: 'Publishing date new–>old',
      name: 'publishingDateAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }, { field: 'title', direction: 'asc' }]
    },
    {
      title: 'Publishing date old->new',
      name: 'publishingDateDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }, { field: 'title', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      image: 'image'
    },
    prepare ({ title = 'No title', publishedAt, image }) {
      return {
        title,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString()
          : 'Missing publishing date',
        media: image
      }
    }
  }
}
