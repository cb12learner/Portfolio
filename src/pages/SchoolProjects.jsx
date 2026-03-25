import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip,
} from 'recharts'
import { schoolProjects } from '../data/schoolProjects'
import styles from './SchoolProjects.module.css'

function ParetoChart({ data }) {
  return (
    <div className={styles.chartBlock}>
      <p className="chart-label">Nonconformity Frequency by Defect Type (Pareto)</p>
      <p className="chart-desc">
        Top 3 defect types account for 54.9% of all nonconformities — the primary intervention targets.
      </p>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="defect" tick={{ fontSize: 10, fill: 'var(--text-muted)' }} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: 'var(--text-muted)' }} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{ fontSize: '0.82rem', borderRadius: '8px', border: '1px solid var(--border)' }}
            formatter={(v, n, p) => [v, 'Count']}
          />
          <Bar
            dataKey="count"
            name="Count"
            fill="var(--accent)"
            radius={[4, 4, 0, 0]}
            // highlight top 3 in accent, rest in grey
            isAnimationActive={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

function CostChart({ data }) {
  return (
    <div className={styles.chartBlock}>
      <p className="chart-label">Unit Cost Breakdown ($/unit)</p>
      <p className="chart-desc">
        Illustrative cost model across five cost categories for the final design alternative.
      </p>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} layout="vertical" margin={{ top: 4, right: 32, left: 64, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
          <XAxis type="number" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} tickLine={false} axisLine={false} tickFormatter={v => `$${v}`} />
          <YAxis type="category" dataKey="category" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} tickLine={false} axisLine={false} width={90} />
          <Tooltip
            contentStyle={{ fontSize: '0.82rem', borderRadius: '8px', border: '1px solid var(--border)' }}
            formatter={(v) => [`$${v.toFixed(2)}`, 'Cost/unit']}
          />
          <Bar dataKey="cost" name="Cost/unit" fill="var(--accent)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default function SchoolProjects() {
  return (
    <div className="page-container">
      <h1 className="page-title">School Projects</h1>
      <p className="page-subtitle">
        Academic work in quality engineering and product design.
      </p>

      {schoolProjects.map((project) => (
        <div key={project.id} className="card">
          <div className={styles.header}>
            <div>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.meta}>{project.course} · {project.semester}</p>
            </div>
            {project.labReport ? (
              <a className={styles.reportBtn} href={project.labReport} target="_blank" rel="noreferrer">
                View Report ↗
              </a>
            ) : (
              <span className={styles.reportPlaceholder}>Report coming soon</span>
            )}
          </div>

          <p className={styles.summary}>{project.summary}</p>

          <div className={styles.results}>
            <p className={styles.resultsLabel}>Key Results</p>
            <ul className="results-list">
              {project.results.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>

          {project.chartType === 'pareto' && <ParetoChart data={project.chartData} />}
          {project.chartType === 'cost' && <CostChart data={project.chartData} />}
        </div>
      ))}
    </div>
  )
}
