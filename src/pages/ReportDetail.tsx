import { useParams, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { Calendar, ArrowRight, FileText, Download, Loader2 } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { mockReports } from '../data/mockReports'
import { exportReportToPDF } from '../utils/pdfExport'

export function ReportDetail() {
  const { id } = useParams<{ id: string }>()
  const report = mockReports.find(r => r.id === id)
  const [isExporting, setIsExporting] = useState(false)

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
        <Link to="/reports" className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-all mb-8 group">
          <ArrowRight className="w-5 h-5 icon-md group-hover:translate-x-1 transition-transform" />
          <span className="font-medium">العودة إلى التقارير</span>
        </Link>

        {/* Report Content for PDF Export */}
        <div data-report-content className="bg-card p-8 md:p-10 rounded-2xl shadow-lg">
        {/* Report Header */}
        <Card hover={false} className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge variant={categoryColors[report.category]}>
              {report.category}
            </Badge>
            <div className="flex items-center gap-2 text-secondary">
              <Calendar className="icon-md" />
              <span className="text-sm">{formattedDate}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-6 leading-tight">
            {report.title}
          </h1>

          <p className="text-lg md:text-xl text-secondary leading-relaxed">
            {report.description}
          </p>
        </Card>

        {/* Executive Summary */}
        <Card hover={false} className="mb-8 bg-secondary border-2 border-accent/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-accent-10 flex items-center justify-center shadow-sm">
              <FileText className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              الملخص التنفيذي
            </h2>
          </div>
          <p className="text-primary leading-relaxed text-lg">
            {report.summary}
          </p>
        </Card>

        {/* Report Sections */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
            أقسام التقرير
          </h2>

          {report.sections.map((section, index) => (
            <Card key={index} hover={false} className="relative overflow-hidden">
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-accent-10 shadow-sm">
                  <span className="text-xl font-bold text-accent">{index + 1}</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                    {section.title}
                  </h3>
                  <p className="text-primary leading-relaxed whitespace-pre-line text-base md:text-lg">
                    {section.content}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-wrap gap-4">
          <Button 
            onClick={async () => {
              setIsExporting(true)
              try {
                await exportReportToPDF(report)
              } catch (error) {
                console.error('خطأ في تصدير PDF:', error)
                alert('حدث خطأ أثناء تصدير PDF. يرجى المحاولة مرة أخرى.')
              } finally {
                setIsExporting(false)
              }
            }}
            disabled={isExporting}
            className="gap-2"
          >
            {isExporting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin icon-md" />
                جاري التحضير...
              </>
            ) : (
              <>
                <Download className="w-5 h-5 icon-md" />
                تحميل PDF
              </>
            )}
          </Button>
          <Link to="/reports">
            <Button variant="outline" className="gap-2">
              <ArrowRight className="w-5 h-5 icon-md" />
              جميع التقارير
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}