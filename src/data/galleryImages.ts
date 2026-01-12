export interface GalleryImage {
  id: string
  url: string
  title: string
  titleEn: string
  category: 'GIS' | 'Reports' | 'Dron' | 'Telegrams'
  categoryAr: string
  attribution: string
  photographerUrl: string
  description: string
  placeholderColor?: string
}

export const categories = [
  { id: 'all', label: 'الكل', labelEn: 'All' },
  { id: 'GIS', label: 'الدعم الفني والتحليل', labelEn: 'Nature' },
  { id: 'Reports', label: 'البلاغات', labelEn: 'Architecture' },
  { id: 'Dron', label: 'الاستطلاع الجوي', labelEn: 'Urban' },
  { id: 'Telegrams', label: 'البرقيات', labelEn: 'Interior' }
  
]

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: '/assets/flag.png',
    title: 'تحليل جغرافي متقدم',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: 'نظام معلومات جغرافية متطور للتحليل والدعم الفني',
    placeholderColor: '#707EA3'
  },
  {
    id: '2',
    url: '/assets/1.jpeg',
    title: 'خرائط عمل وزارة الدفاع',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'البلاغات',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#3A6462'
  },
  {
    id: '3',
    url: '/assets/2.jpeg',
    title: 'خرائط عمل وزارة الدفاع',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'الاستطلاع الجوي',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  }
  
]