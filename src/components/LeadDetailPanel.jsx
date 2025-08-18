function LeadDetailPanel() {
  return (
    <div className="detail-panel open">
      <div>
        <h2>Name</h2>
        <button>close</button>
      </div>

      <div>
        <div>
          <span>Company</span>
          <span>Company Name</span>
        </div>

        <div>
          <label>Email</label>
          <input type="email" />
        </div>

        <div>
          <span>Source</span>
          <span>Source Name</span>
        </div>

        <div>
          <span>Score</span>
          <span>12</span>
        </div>

        <div>
          <label>Status</label>
          <select name="" id="">
            <option value=""></option>
          </select>
        </div>
      </div>

      <div>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  )
}

export default LeadDetailPanel;