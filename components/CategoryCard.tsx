export default function CategoryCard({ title }: { title: string }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg cursor-pointer">
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  )
}
