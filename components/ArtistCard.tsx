export default function ArtistCard({ name, category, priceRange, location }: 
{ name: string, category: string, priceRange: string, location: string }) {
  return (
    <div className="border rounded p-4 shadow">
      <h3 className="font-bold text-lg">{name}</h3>
      <p>{category} • {location}</p>
      <p className="text-sm text-gray-500">Fee: {priceRange}</p>
      <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded">Ask for Quote</button>
    </div>
  )
}
