import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'portfolioItem',
  title: 'Portfolio Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Corporate', value: 'Corporate' },
          { title: 'Wedding', value: 'Wedding' },
          { title: 'Stage', value: 'Stage' },
          { title: 'Community', value: 'Community' },
          { title: 'Rentals', value: 'Rentals' },
          { title: 'Gifts', value: 'Gifts' },
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Additional Gallery Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'videoUrl',
      title: 'YouTube/Vimeo URL',
      type: 'url',
      description: 'Optional: Include a video link if available.',
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'date',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
    }),
  ],
})