import { useState, useEffect } from 'react'
import LeadsList from './components/LeadsList'
// import LeadDetailPanel from './components/LeadDetailPanel'
// import OpportunitiesTable from './components/OpportunitiesTable'

function App() {
  const [leads, setLeads] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [selectedLeadId, setSelectedLeadId] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch('/leads.json')
        .then((res) => {
          if (!res.ok) throw new Error('Failed to load leads')
            return res.json()
        })
        .then((data) => {
          setLeads(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message)
          setLoading(false)
        });
    }, 1000)
  }, [])

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <main className="container mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Mini Seller Console</h1>
        <LeadsList leadsData={leads} />
      </main>
    </div>
  )
}

export default App
