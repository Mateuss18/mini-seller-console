import { useState, useEffect } from 'react'
import LeadsList from './components/LeadsList'
// import LeadDetailPanel from './components/LeadDetailPanel'
// import OpportunitiesTable from './components/OpportunitiesTable'
import './App.css'

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
    <div>
      <LeadsList leadsData={leads}  />
    </div>
  )
}

export default App
