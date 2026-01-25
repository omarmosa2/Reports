import { TrendingUp, FileText, BarChart3, Activity } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { mockReports, statistics } from '../data/mockReports'

export function Statistics() {
  const categoryCounts = mockReports.reduce((acc, report) => {
    acc[report.category] = (acc[report.category] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const categoryData = Object.entries(categoryCounts).map(([category, count]) => ({
    category,
    count,
    percentage: Math.round((count / mockReports.length) * 100)
  }))

  const statsCards = [
    {
      icon: FileText,
      label: 'إجمالي التقارير',
      value: statistics.totalReports,
      trend: '+12%',
      color: 'text-blue',
      bgColor: 'bg-blue-bg',
      colorVar: '--color-blue',
      bgVar: '--color-blue-bg'
    },
    {
      icon: BarChart3,
      label: 'أنواع التقارير',
      value: statistics.categories,
      trend: 'ثابت',
      color: 'text-green',
      bgColor: 'bg-green-bg',
      colorVar: '--color-green',
      bgVar: '--color-green-bg'
    },
    {
      icon: TrendingUp,
      label: 'معدل النمو',
      value: '25%',
      trend: '+8%',
      color: 'text-purple',
      bgColor: 'bg-purple-bg',
      colorVar: '--color-purple',
      bgVar: '--color-purple-bg'
    },
    {
      icon: Activity,
      label: 'النشاط الشهري',
      value: '100%',
      trend: '+15%',
      color: 'text-orange',
      bgColor: 'bg-orange-bg',
      colorVar: '--color-orange',
      bgVar: '--color-orange-bg'
    }
  ]

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Badge variant="primary" className="mb-4">الإحصائيات</Badge>
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">نظرة عامة على البيانات</h1>
          <p className="text-lg text-secondary max-w-3xl">إحصائيات شاملة ومؤشرات الأداء الرئيسية للتقارير</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statsCards.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label}>
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `var(${stat.bgVar})` }}
                  >
                    <Icon 
                      className="w-6 h-6" 
                      style={{ width: '24px', height: '24px', color: `var(${stat.colorVar})` }} 
                    />
                  </div>
                  <Badge variant="success" className="text-xs">
                    {stat.trend}
                  </Badge>
                </div>
                
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-secondary text-sm">{stat.label}</p>
              </Card>
            )
          })}
        </div>

        {/* Category Distribution */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card hover={false}>
            <h2 className="text-2xl font-bold text-primary mb-6">توزيع التقارير حسب النوع</h2>
            
            <div className="space-y-4">
              {categoryData.map(({ category, count, percentage }) => (
                <div key={category}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-primary font-medium">{category}</span>
                    <span className="text-secondary text-sm">{count} تقرير ({percentage}%)</span>
                  </div>
                  <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 gradient-accent"
                    style={{ width: `${percentage}%` }}
                  ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card hover={false}>
            <h2 className="text-2xl font-bold text-primary mb-6">الأداء الشهري</h2>
            
            <div className="space-y-6">
              {[
                { month: 'ديسمبر', value: 85, colorVar: '--color-blue' },
                { month: 'نوفمبر', value: 72, colorVar: '--color-green' },
                { month: 'أكتوبر', value: 90, colorVar: '--color-purple' },
                { month: 'سبتمبر', value: 68, colorVar: '--color-orange' }
              ].map((month) => (
                <div key={month.month}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-primary font-medium">{month.month}</span>
                    <span className="text-secondary text-sm">{month.value}%</span>
                  </div>
                  <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${month.value}%`, backgroundColor: `var(${month.colorVar})` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Additional Insights */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <div 
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-blue-bg)' }}
            >
              <FileText 
                className="w-8 h-8" 
                style={{ width: '32px', height: '32px', color: 'var(--color-blue)' }} 
              />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">
              آخر تحديث
            </h3>
            <p className="text-secondary">
              {new Date(statistics.lastUpdate).toLocaleDateString('ar-SA')}
            </p>
          </Card>

          <Card className="text-center">
            <div 
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-green-bg)' }}
            >
              <TrendingUp 
                className="w-8 h-8" 
                style={{ width: '32px', height: '32px', color: 'var(--color-green)' }} 
              />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">
              معدل الإكمال
            </h3>
            <p className="text-secondary">
              100%
            </p>
          </Card>

          <Card className="text-center">
            <div 
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-purple-bg)' }}
            >
              <Activity 
                className="w-8 h-8" 
                style={{ width: '32px', height: '32px', color: 'var(--color-purple)' }} 
              />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">
              التفاعل
            </h3>
            <p className="text-secondary">
              ممتاز
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}