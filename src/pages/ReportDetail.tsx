import { useParams, Link, Navigate } from 'react-router-dom'
import { Calendar, ArrowRight, FileText } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { mockReports } from '../data/mockReports'

export function ReportDetail() {
  const { id } = useParams<{ id: string }>()
  const report = mockReports.find(r => r.id === id)

  if (!report) {
    return <Navigate to="/reports" replace />
  }

  const categoryColors: Record<string, 'primary' | 'secondary' | 'success' | 'warning'> = {
    'قسم الدعم الفني': 'primary',
    'قسم البلاغات': 'warning',
    'قسم الدرون': 'success',
    'البرقيات': 'secondary'
  }

  const formattedDate = new Date(report.date).toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/reports" className="inline-flex items-center gap-2 text-accent hover:opacity-80 transition-opacity mb-8">
          <ArrowRight className="w-5 h-5" style={{ width: '20px', height: '20px' }} />
          <span className="font-medium">العودة إلى التقارير</span>
        </Link>

        {/* Report Header */}
        <Card hover={false} className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge variant={categoryColors[report.category]}>
              {report.category}
            </Badge>
            <div className="flex items-center gap-2 text-secondary">
              <Calendar className="w-5 h-5" style={{ width: '20px', height: '20px' }} />
              <span>{formattedDate}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-primary mb-6">
            {report.title}
          </h1>

          <p className="text-lg text-secondary leading-relaxed">
            {report.description}
          </p>
        </Card>

        {/* Executive Summary */}
        <Card hover={false} className="mb-8 bg-accent-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-accent-10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-accent" style={{ width: '24px', height: '24px', color: 'var(--color-accent)' }} />
            </div>
            <h2 className="text-2xl font-bold text-primary">
              الملخص التنفيذي
            </h2>
          </div>
          <p className="text-primary leading-relaxed">
            {report.summary}
          </p>
        </Card>

        {/* Report Sections */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            أقسام التقرير
          </h2>

          {report.sections.map((section, index) => (
            <Card key={index} hover={false}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-10 flex items-center justify-center">
                  <span className="text-lg font-bold text-accent">{index + 1}</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {section.title}
                  </h3>
                  <p className="text-primary leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-wrap gap-4">
          <Link to="/reports">
            <Button variant="outline" className="gap-2">
              <ArrowRight className="w-5 h-5" style={{ width: '20px', height: '20px' }} />
              جميع التقارير
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}