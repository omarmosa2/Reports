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
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: BarChart3,
      label: 'أنواع التقارير',
      value: statistics.categories,
      trend: 'ثابت',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: TrendingUp,
      label: 'معدل النمو',
      value: '25%',
      trend: '+8%',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Activity,
      label: 'النشاط الشهري',
      value: '100%',
      trend: '+15%',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    }
  ]

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Badge variant="primary" className="mb-4">الإحصائيات</Badge>
          <h1 className="text-4xl md:text-5xl font-black text-(--color-text-primary) mb-4">
            نظرة عامة على البيانات
          </h1>
          <p className="text-lg text-(--color-text-secondary) max-w-3xl">
            إحصائيات شاملة ومؤشرات الأداء الرئيسية للتقارير
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statsCards.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} style={{ width: '24px', height: '24px' }} />
                  </div>
                  <Badge variant="success" className="text-xs">
                    {stat.trend}
                  </Badge>
                </div>
                
                <h3 className="text-3xl font-bold text-(--color-text-primary) mb-2">
                  {stat.value}
                </h3>
                <p className="text-(--color-text-secondary) text-sm">
                  {stat.label}
                </p>
              </Card>
            )
          })}
        </div>

        {/* Category Distribution */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card hover={false}>
            <h2 className="text-2xl font-bold text-(--color-text-primary) mb-6">
              توزيع التقارير حسب النوع
            </h2>
            
            <div className="space-y-4">
              {categoryData.map(({ category, count, percentage }) => (
                <div key={category}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-(--color-text-primary) font-medium">{category}</span>
                    <span className="text-(--color-text-secondary) text-sm">{count} تقرير ({percentage}%)</span>
                  </div>
                  <div className="w-full h-3 bg-(--color-bg-secondary) rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-(--color-accent) to-(--dark-accent) rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card hover={false}>
            <h2 className="text-2xl font-bold text-(--color-text-primary) mb-6">
              الأداء الشهري
            </h2>
            
            <div className="space-y-6">
              {[
                { month: 'ديسمبر', value: 85, color: 'bg-blue-500' },
                { month: 'نوفمبر', value: 72, color: 'bg-green-500' },
                { month: 'أكتوبر', value: 90, color: 'bg-purple-500' },
                { month: 'سبتمبر', value: 68, color: 'bg-orange-500' }
              ].map((month) => (
                <div key={month.month}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-(--color-text-primary) font-medium">{month.month}</span>
                    <span className="text-(--color-text-secondary) text-sm">{month.value}%</span>
                  </div>
                  <div className="w-full h-3 bg-(--color-bg-secondary) rounded-full overflow-hidden">
                    <div
                      className={`h-full ${month.color} rounded-full transition-all duration-500`}
                      style={{ width: `${month.value}%` }}
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
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center">
              <FileText className="w-8 h-8 text-blue-500" style={{ width: '32px', height: '32px', color: '#3b82f6' }} />
            </div>
            <h3 className="text-xl font-bold text-(--color-text-primary) mb-2">
              آخر تحديث
            </h3>
            <p className="text-(--color-text-secondary)">
              {new Date(statistics.lastUpdate).toLocaleDateString('ar-SA')}
            </p>
          </Card>

          <Card className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/10 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-green-500" style={{ width: '32px', height: '32px', color: '#22c55e' }} />
            </div>
            <h3 className="text-xl font-bold text-(--color-text-primary) mb-2">
              معدل الإكمال
            </h3>
            <p className="text-(--color-text-secondary)">
              100%
            </p>
          </Card>

          <Card className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-500/10 flex items-center justify-center">
              <Activity className="w-8 h-8 text-purple-500" style={{ width: '32px', height: '32px', color: '#a855f7' }} />
            </div>
            <h3 className="text-xl font-bold text-(--color-text-primary) mb-2">
              التفاعل
            </h3>
            <p className="text-(--color-text-secondary)">
              ممتاز
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}