import { useState } from 'react'
import { Search } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { ReportCard } from '../components/reports/ReportCard'
import { mockReports, reportCategories } from '../data/mockReports'

export function Reports() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredReports = mockReports.filter(report => {
    const matchesCategory = selectedCategory === 'all' || report.category === selectedCategory
    const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-(--color-text-primary) mb-4">
            استعرض جميع التقارير
          </h1>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-(--color-text-secondary) w-5 h-5" 
              style={{ width: '20px', height: '20px' }}
            />
            <input
              type="text"
              placeholder="البحث في التقارير..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-12 pl-4 py-3 rounded-lg bg-(--color-bg-card) border border-(--color-border) text-(--color-text-primary) focus:outline-none focus:ring-2 focus:ring-(--color-accent) transition-all"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {reportCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-(--color-accent) text-white'
                    : 'bg-(--color-bg-card) text-(--color-text-secondary) border border-(--color-border) hover:border-(--color-accent) hover:text-(--color-accent)'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-(--color-text-secondary)">
            {filteredReports.length} تقرير متاح
          </p>
        </div>

        {/* Reports Grid */}
        {filteredReports.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReports.map((report) => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-(--color-text-secondary)">
              لم يتم العثور على تقارير مطابقة
            </p>
          </div>
        )}
      </div>
    </div>
  )
}