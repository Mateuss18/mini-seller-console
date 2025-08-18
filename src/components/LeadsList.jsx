import { useState } from "react";

function LeadsList({ leadsData }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("")
  const [sortScore, setSortScore] = useState(true)

  const filtered = leadsData
    .filter((lead) => 
      lead.name.toLowerCase().includes(query.toLowerCase()) ||
      lead.company.toLowerCase().includes(query.toLowerCase())
    )
    .filter((lead) => 
      !status || lead.status === status
    )
    .sort((a, b) => 
      sortScore ? b.score - a.score : a.score - b.score
    );
  
  return (
    <div className="bg-white text-black">
      <h2 className="text-2xl font-bold mb-6">Leads List</h2>
      
      <div className="flex gap-4 items-end mb-6">
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Search Leads</label>
          <input 
            type="search"
            placeholder="Search by name or company.."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-gray-400 p-2 rounded-md focus:outline-none focus:border-black"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Filter by:</label>
          <select 
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border border-gray-400 cursor-pointer p-2 rounded-md focus:outline-none focus:border-black"
          >
            <option value="">All</option>
            <option value="New">New</option>
            <option value="Qualified">Qualified</option>
            <option value="Contacted">Contacted</option>
            <option value="Lost">Lost</option>
          </select>
        </div>

        <button 
          onClick={() => setSortScore(!sortScore)}
          className="border border-black bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors cursor-pointer"
        >
          Sort by Value {sortScore ? "↓" : "↑"}
        </button>
      </div>

      <div className="overflow-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b border-black">
              <th className="px-4 py-3 text-left font-semibold">Name</th>
              <th className="px-4 py-3 text-left font-semibold">Company</th>
              <th className="px-4 py-3 text-left font-semibold">Source</th>
              <th className="px-4 py-3 text-left font-semibold">Score</th>
              <th className="px-4 py-3 text-left font-semibold">Status</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length > 0 ? (
              <>
                {filtered.map((lead) => (
                  <tr key={lead.id} className="border-b border-gray-300 hover:bg-gray-50 cursor-pointer">
                    <td className="px-4 py-3">{lead.name}</td>
                    <td className="px-4 py-3">{lead.company}</td>
                    <td className="px-4 py-3">{lead.source}</td>
                    <td className="px-4 py-3">{lead.score}</td>
                    <td className="px-4 py-3">{lead.status}</td>
                  </tr>
                ))}
              </>
            ) : (
              <tr><td colSpan="5" className="px-4 py-4 text-center text-gray-500">No results found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LeadsList;