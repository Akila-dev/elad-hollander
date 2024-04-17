export default {
  name: 'mentorship',
  title: 'Mentorship',
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
      name: 'descriptionEn',
      title: 'DescrIption (English)',
      type: 'text',
    },
    {
      name: 'titleHeb',
      title: 'Title (Hebrews)',
      type: 'string',
    },
    {
      name: 'descriptionHeb',
      title: 'DescrIption (Hebrews)',
      type: 'text',
    },
  ],
};
