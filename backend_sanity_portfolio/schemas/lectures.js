export default {
  name: 'lectures',
  title: 'Lectures',
  type: 'document',
  fields: [
    {
      name: 'imgurl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
    },
    {
      name: 'excerptEn',
      title: 'Excerpt (English)',
      type: 'string',
    },
    {
      name: 'contentEn',
      title: 'Content (English)',
      type: 'text',
    },
    {
      name: 'titleHeb',
      title: 'Title (Hebrews)',
      type: 'string',
    },
    {
      name: 'excerptHeb',
      title: 'Excerpt (Hebrews)',
      type: 'string',
    },
    {
      name: 'contentHeb',
      title: 'Content (Hebrews)',
      type: 'text',
    },
  ],
};
