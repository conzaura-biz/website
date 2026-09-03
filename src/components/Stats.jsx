const stats=[['500+','Businesses Assisted'],['4.9/5','Client Rating'],['48 hrs','Average Response Time'],['100%','Confidential Support']];
export default function Stats({dark=false}) { return <div className={`stats ${dark?'stats-dark':''}`}>{stats.map(([value,label])=><div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>; }
