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
    url: '/assets/1.jpeg',
    title: 'خرائط عمل وزارة الدفاع',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#3A6462'
  },
  {
    id: '2',
    url: '/assets/2.jpeg',
    title: 'خرائط عمل وزارة الدفاع',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#3A6462'
  },
  {
    id: '3',
    url: '/assets/3.jpg',
    title: 'خرق جديد قامت به قوات قسد اسنهدفت فيه نقاط تابعة للأمن الداخلي والدفاع المدني',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '4',
    url: '/assets/4.jpg',
    title: 'أماكن استهداف الطائرات المسيرة لمدينة حلب',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '5',
    url: '/assets/5.jpg',
    title: 'أماكن استهداف الطائرات المسيرة لمدينة حلب',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '6',
    url: '/assets/6.jpg',
    title: 'أماكن استهداف الطائرات المسيرة لمدينة حلب',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '7',
    url: '/assets/7.jpg',
    title: 'خريطة عمل لحملة حلب ست الكل',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '8',
    url: '/assets/8.jpg',
    title: 'أماكن استهداف الطائرات المسيرة لمدينة حلب',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '9',
    url: '/assets/9.jpg',
    title: 'جريمة سطو مسلح تهز الشارع السوري خاصة مدينة حلب (محل الصاغة)',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '10',
    url: '/assets/10.jpg',
    title: 'خطة التوزع الأمني لفعالية رأس السنة الميلادية',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '11',
    url: '/assets/11.jpg',
    title: 'خطة التوزع الأمني لفعالية رأس السنة الميلادية',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '12',
    url: '/assets/12.jpg',
    title: 'خطة التوزع الأمني لفعالية رأس السنة الميلادية',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '13',
    url: '/assets/13.jpg',
    title: 'خطة التوزع الأمني لفعالية رأس السنة الميلادية',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '14',
    url: '/assets/14.jpeg',
    title: 'تدريب لفريق العمل',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '15',
    url: '/assets/15.jpeg',
    title: 'زيارة السيد الوزير والسيد المحافظ لغرفة العمليات',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '16',
    url: '/assets/16.jpeg',
    title: 'تدريب للمديريات التابعة لعمليات حلب',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '17',
    url: '/assets/17.jpeg',
    title: 'تدريب لفريق العمل',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '19',
    url: '/assets/19.png',
    title: 'خريطة مديريات حلب للتوجيه المعنوي',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '21',
    url: '/assets/21.png',
    title: 'ملف اكسل لبيانات التواصل مع اقسام الشرطة والأمن في حلب',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '22',
    url: '/assets/22.png',
    title: 'إنشاء ملفات أكسل لحسابات الشام كاش لقسم الدعم الفني وقسم البلاغات',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '23',
    url: '/assets/23.png',
    title: 'إنشاء ملفات أكسل لحسابات الشام كاش لقسم الدعم الفني وقسم البلاغات',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '24',
    url: '/assets/24.jpg',
    title: 'استكمال مشروع الأنفاق ورسم طريق للعبور بين الأنفاق',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '25',
    url: '/assets/25.jpg',
    title: 'تحديث خريطة السيطرة',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '26',
    url: '/assets/26.jpg',
    title: 'خريطة طرقات حلب',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '27',
    url: '/assets/27.jpg',
    title: 'تصميم غلاف',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '28',
    url: '/assets/28.jpg',
    title: 'تصميم خريطة مناطق سيطرة ',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '29',
    url: '/assets/29.jpg',
    title: 'تصميم خريطة مناطق سيطرة',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },
  {
    id: '30',
    url: '/assets/30.jpg',
    title: 'تصميم خريطة مناطق سيطرة',
    titleEn: '',
    category: 'GIS',
    categoryAr: 'قسم الدعم الفني والتحليل',
    attribution: '',
    photographerUrl: '',
    description: '',
    placeholderColor: '#26260c'
  },

  
]