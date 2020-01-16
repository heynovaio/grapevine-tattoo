import { MdPerson } from 'react-icons/md'

export default {
  name: 'guestArtist',
  title: 'Guest Artist',
  type: 'document',
  icon: MdPerson,
  liveEdit: false,
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
      name: 'appearanceDate',
      title: 'Appearance Date',
      description: 'You can use this field to organize the order of artists coming',
      type: 'datetime'
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string'
    },
    {
      name: 'bookingLink',
      title: 'Booking URL',
      type: 'url'
    },
    {
      name: 'videoLink',
      title: 'Video URL',
      type: 'url'
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
      name: 'gallery',
      title: 'Work',
      type: 'slideshow',
    },
    {
      name: 'bodyOne',
      title: 'Bio Block 1',
      type: 'blockContent'
    },
    {
      name: 'bodyTwo',
      title: 'Bio Block 2',
      type: 'blockContent'
    },
    {
      name: 'bodyThree',
      title: 'Bio Block 3',
      type: 'blockContent'
    }
  ],
  preview: {
    select: {
      title: 'title',
      appearanceDate: 'appearanceDate',
      image: 'image'
    },
    prepare ({ title = 'No title', appearanceDate, image }) {
      return {
        title,
        subtitle: appearanceDate
          ? new Date(appearanceDate).toLocaleDateString()
          : 'Missing publishing date',
        media: image
      }
    }
  }
}
