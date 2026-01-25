import { useState } from 'react'
import { Search } from 'lucide-react'
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
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">
            استعرض جميع التقارير
          </h1>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search
              className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary icon-md pointer-events-none"
            />
            <input
              type="text"
              placeholder="البحث في التقارير..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-12 pl-4 py-3.5 rounded-xl bg-card border-2 border-color text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all shadow-sm hover:shadow-md focus:shadow-lg"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {reportCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-xl font-medium transition-all shadow-sm ${
                  selectedCategory === category.id
                    ? 'bg-accent text-white border-2 border-accent shadow-md'
                    : 'bg-card text-secondary border-2 border-color hover:border-accent hover:text-accent hover:bg-secondary hover:shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-secondary text-lg">
            <span className="font-bold text-accent">{filteredReports.length}</span> تقرير متاح
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
            <p className="text-xl text-secondary">لم يتم العثور على تقارير مطابقة</p>
          </div>
        )}
      </div>
    </div>
  )
}