import { categories } from '../../data/galleryImages'

interface FilterBarProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function FilterBar({ activeCategory, onCategoryChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-3 rounded-lg font-medium smooth-transition ${
            activeCategory === category.id
              ? 'bg-accent text-white shadow-lg'
              : 'bg-card text-primary border border-color hover:border-accent hover:text-accent'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}