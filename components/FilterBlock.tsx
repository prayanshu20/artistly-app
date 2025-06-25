export default function FilterBlock({ categories, onFilter }: { categories: string[], onFilter: (cat: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {categories.map(cat => (
        <button key={cat} onClick={() => onFilter(cat)} className="px-3 py-1 border rounded">
          {cat}
        </button>
      ))}
    </div>
  )
}
