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
    <div>
      <h1>Leads</h1>
      <div>
        <div>
          <label>Search Leads</label>
          <input 
            type="search"
            placeholder="Search by name or company.."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div>
          <label>Filter by:</label>
          <select 
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">All</option>
            <option value="New">New</option>
            <option value="Qualified">Qualified</option>
            <option value="Contacted">Contacted</option>
            <option value="Lost">Lost</option>
          </select>
        </div>

        <button onClick={() => setSortScore(!sortScore)}>
          Sort by Value {sortScore ?  "↓" : "↑"}
        </button>
      </div>

      <table className="min-w-full border">
        <thead className="bg-gray-100 text-gray-800">
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Company</th>
            <th className="px-4 py-2 border">Source</th>
            <th className="px-4 py-2 border">Score</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>

        <tbody>
          {filtered.length > 0 ? (
            <>
              {filtered.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                  <td className="px-4 py-2 border">{lead.name}</td>
                  <td className="px-4 py-2 border">{lead.company}</td>
                  <td className="px-4 py-2 border">{lead.source}</td>
                  <td className="px-4 py-2 border">{lead.score}</td>
                  <td className="px-4 py-2 border">{lead.status}</td>
                </tr>
              ))}
            </>
          ) : (
            <p>No results found.</p>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default LeadsList;