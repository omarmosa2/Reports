import { Link } from 'react-router-dom'
import { Calendar, ArrowLeft } from 'lucide-react'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import type { Report } from '../../data/mockReports'

interface ReportCardProps {
  report: Report
}

export function ReportCard({ report }: ReportCardProps) {
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
    <Card>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <Badge variant={categoryColors[report.category]}>
            {report.category}
          </Badge>
          <div className="flex items-center gap-2 text-secondary text-sm">
            <Calendar className="icon-sm" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 line-clamp-2 leading-tight">
          {report.title}
        </h3>
        
        <p className="text-secondary mb-6 line-clamp-3 flex-1 leading-relaxed">
          {report.description}
        </p>

        {/* Footer */}
        <Link to={`/reports/${report.id}`}>
          <Button variant="outline" className="w-full gap-2 text-primary hover:bg-accent-10">
            عرض التقرير
          </Button>
        </Link>
      </div>
    </Card>
  )
}